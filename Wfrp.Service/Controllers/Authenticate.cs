using AspNet.Security.OAuth.GitHub;
using ElCamino.AspNetCore.Identity.AzureTable;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Octokit;
using System.Security.Claims;
using System.Text.Json;
using System.Web;
using Wfrp.Service.Data;
using IdentityRole = ElCamino.AspNetCore.Identity.AzureTable.Model.IdentityRole;
using IdentityUser = ElCamino.AspNetCore.Identity.AzureTable.Model.IdentityUser;

namespace Wfrp.Service.Controllers
{
    [Route("")]
    public class Authenticate : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserStore<IdentityUser, IdentityRole, ApplicationDbContext> _userStore;

        public Authenticate(IConfiguration configuration, IHttpClientFactory httpClientFactory, SignInManager<IdentityUser> signInManager, IUserStore<IdentityUser> userStore)
        {
            _configuration = configuration;
            _httpClientFactory = httpClientFactory;
            _signInManager = signInManager;
            _userStore = (UserStore<IdentityUser, IdentityRole, ApplicationDbContext>)userStore;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("/signin")]
        public async Task<IActionResult> Login()
        {
            return new ChallengeResult(GitHubAuthenticationDefaults.DisplayName, new AuthenticationProperties
            {
                RedirectUri = "/static/index.html?signedin=true"
            });

            var httpClient = _httpClientFactory.CreateClient();

            var formContent = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("client_id", _configuration["github:clientId"]),
                new KeyValuePair<string, string>("client_secret", _configuration["github:clientSecret"]),
          //      new KeyValuePair<string, string>("code", code.GetString("code")),
                new KeyValuePair<string, string>("redirect_uri", "https://localhost:3000/login")
            });
            var result = await httpClient.PostAsync("https://github.com/login/oauth/access_token", formContent);

            var textResult = await result.Content.ReadAsStringAsync();
            var accessToken = HttpUtility.ParseQueryString(textResult)["access_token"];

            var client = new GitHubClient(new ProductHeaderValue("test"))
            {
                Credentials = new Credentials(accessToken)
            };
            var githubUser = await client.User.Current();
            var repo = await client.Repository.Get("silentmark", "wfrp4core-pl");
            if (repo != null)
            {
                var identity = await _userStore.FindByIdAsync(githubUser.Login);
                var claims = new List<Claim>
                {
                    new Claim("access_token", accessToken)
                };
                if (identity == null)
                {
                    identity = new IdentityUser(githubUser.Login);
                    identity.Email = githubUser.Email;
                    identity.Id = githubUser.Login;
                    identity.EmailConfirmed = true;
                    identity.SecurityStamp = Guid.NewGuid().ToString();
                    await _userStore.CreateAsync(identity, CancellationToken.None);
                }
                var claimsPrincipal = await _signInManager.CreateUserPrincipalAsync(identity);
                var claimsIdentity = claimsPrincipal?.Identity as ClaimsIdentity;
                claimsIdentity.AddClaims(claims);
                await _signInManager.SignInWithClaimsAsync(identity, new AuthenticationProperties { IsPersistent = true, }, claimsIdentity.Claims);
                //await _signInManager.Context.SignInAsync(claimsPrincipal, new AuthenticationProperties { IsPersistent = true });
                HttpContext.User.AddIdentity(claimsIdentity);

                return new OkObjectResult(githubUser);
            }
            else
            {
                return new ForbidResult("Nie masz uprawnień do repozytorium silentmark/wfrp4e-core");
            }
        }

        [HttpGet]
        [Route("/profile")]
        public async Task<IActionResult> GetProfile()
        {
            // 6. We are reading claims that were
            //    supplied from our OpenID provider
            var laims = User.Claims.ToList();

            // 6. From GitHub
            if (User.AccessToken() is { } accessToken)
            {
                var client = new GitHubClient(new ProductHeaderValue("test"))
                {
                    Credentials = new Credentials(accessToken)
                };
                var githubUser = await client.User.Current();
                var repo = await client.Repository.Get("silentmark", "wfrp4core-pl");
                if (repo != null)
                {
                    var identity = await _userStore.FindByIdAsync(githubUser.Login);
                    if (identity == null)
                    {
                        identity = new IdentityUser(githubUser.Login);
                        identity.Email = githubUser.Email;
                        identity.Id = githubUser.Login;
                        identity.EmailConfirmed = true;
                        identity.SecurityStamp = Guid.NewGuid().ToString();
                        await _userStore.CreateAsync(identity, CancellationToken.None);
                    }
                    return new OkObjectResult(githubUser);
                }
            }
            return new ForbidResult("Nie masz uprawnień do repozytorium silentmark/wfrp4e-core");
        }

        [HttpGet]
        [Route("/signout")]
        public override SignOutResult SignOut()
        {
            HttpContext.SignOutAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new AuthenticationProperties
            {
                RedirectUri = "/"
            }).ConfigureAwait(false).GetAwaiter().GetResult();
            return base.SignOut();
        }
    }
}