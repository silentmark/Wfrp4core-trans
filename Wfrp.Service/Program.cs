using ElCamino.AspNetCore.Identity.AzureTable.Model;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using Octokit;
using System.Net;
using System.Reflection;
using System.Security.Claims;
using Wfrp.Service.Data;
using IdentityRole = ElCamino.AspNetCore.Identity.AzureTable.Model.IdentityRole;
using IdentityUser = ElCamino.AspNetCore.Identity.AzureTable.Model.IdentityUser;

namespace Wfrp.Service
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = builder.Configuration;

            // Add services to the container.

            builder.Services.AddControllers();//.AddNewtonsoftJson();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddSingleton<IConfiguration>(configuration);
            builder.Services.AddHttpClient();

            builder.Services.AddIdentityCore<IdentityUser>()
                    .AddRoles<IdentityRole>()
                    .AddSignInManager()
                    .AddTokenProvider(TokenOptions.DefaultProvider, typeof(DataProtectorTokenProvider<IdentityUser>))
                    .AddTokenProvider(TokenOptions.DefaultEmailProvider, typeof(EmailTokenProvider<IdentityUser>))
                    .AddTokenProvider(TokenOptions.DefaultPhoneProvider, typeof(PhoneNumberTokenProvider<IdentityUser>))
                    .AddTokenProvider(TokenOptions.DefaultAuthenticatorProvider, typeof(AuthenticatorTokenProvider<IdentityUser>))
                    .AddAzureTableStores<ApplicationDbContext>(new Func<IdentityConfiguration>(() =>
                         {
                             IdentityConfiguration idconfig = new IdentityConfiguration();
                             idconfig.TablePrefix = configuration.GetSection("IdentityAzureTable:IdentityConfiguration:TablePrefix").Value;
                             idconfig.StorageConnectionString = configuration.GetSection("IdentityAzureTable:IdentityConfiguration:StorageConnectionString").Value;
                             idconfig.IndexTableName = configuration.GetSection("IdentityAzureTable:IdentityConfiguration:IndexTableName").Value; // default: AspNetIndex
                             idconfig.RoleTableName = configuration.GetSection("IdentityAzureTable:IdentityConfiguration:RoleTableName").Value;   // default: AspNetRoles
                             idconfig.UserTableName = configuration.GetSection("IdentityAzureTable:IdentityConfiguration:UserTableName").Value;   // default: AspNetUsers
                             return idconfig;
                         }))
                    .CreateAzureTablesIfNotExists<ApplicationDbContext>(); //can remove after first run;
            builder.Services.AddAuthentication(o =>
            {
                o.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie( /* config moved to ConfigureApplicationCookie */)
            //.AddCookie(o =>
            //{
            //    // set the path for the authentication challenge
            //    o.LoginPath = "/signin";
            //    // set the path for the sign out
            //    o.LogoutPath = "/signout";
            //    o.ExpireTimeSpan = TimeSpan.FromMinutes(120);
            //    o.SlidingExpiration = true;
            //    o.Cookie.Domain = "localhost";
            //    CookieAuthenticationEvents events1 = new CookieAuthenticationEvents();
            //    events1.OnValidatePrincipal = new Func<CookieValidatePrincipalContext, Task>(cookieStuff =>
            //    {
            //        Console.WriteLine(cookieStuff);
            //        return SecurityStampValidator.ValidatePrincipalAsync(cookieStuff);
            //    });
            //    o.Events = events1;
            //}).
            .AddGitHub(o =>
            {
                o.ClientId = configuration["github:clientId"];
                o.ClientSecret = configuration["github:clientSecret"];
                o.CallbackPath = "/signin-github";

                // Grants access to read a user's profile data.
                // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
                o.Scope.Add("user");
                o.Scope.Add("repo");

                // Optional
                // if you need an access token to call GitHub Apis
                o.Events.OnCreatingTicket += context =>
                {
                    if (context.AccessToken is { })
                    {
                        context.Identity?.AddClaim(new Claim("access_token", context.AccessToken));
                    }

                    return Task.CompletedTask;
                };
            });
            builder.Services.ConfigureApplicationCookie(options =>
            {
                options.ExpireTimeSpan = TimeSpan.FromHours(2);
                options.SlidingExpiration = true;

                options.LoginPath = "/signin";
                options.LogoutPath = "/signout";
                options.Cookie.SameSite = SameSiteMode.Lax;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
            });

            builder.Services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
            });

            builder.Services.AddCors();
            var app = builder.Build();
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder
                                .AllowAnyMethod()
                                .AllowAnyHeader()
                                .AllowAnyOrigin());

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();

            var assemblyDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var assetDirectory = Path.Combine(assemblyDirectory, "static");
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(assetDirectory),
                RequestPath = "/static",
            });

            var wsOptions = new WebSocketOptions
            {
                KeepAliveInterval = TimeSpan.FromMinutes(10),
            };
            //wsOptions.AllowedOrigins.Add("https://localhost:3000");
            app.UseWebSockets(wsOptions);

            app.MapControllers();
            app.Run();
        }
    }
}