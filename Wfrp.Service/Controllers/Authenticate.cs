using AspNet.Security.OAuth.GitHub;
using ElCamino.AspNetCore.Identity.AzureTable;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Octokit;
using System.Net;
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
        private readonly UserStore<IdentityUser, IdentityRole, ApplicationDbContext> _userStore;

        public Authenticate(IUserStore<IdentityUser> userStore)
        {
            _userStore = (UserStore<IdentityUser, IdentityRole, ApplicationDbContext>)userStore;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("/signin")]
        public async Task<IActionResult> Login()
        {
            return new ChallengeResult(GitHubAuthenticationDefaults.DisplayName, new AuthenticationProperties
            {
                RedirectUri = "/postsignin"
            });
        }

        [HttpGet]
        [Authorize]
        [Route("/postsignin")]
        public async Task<IActionResult> PostLogin()
        {
            // 6. From GitHub
            if (User.AccessToken() is { } accessToken)
            {
                var client = new GitHubClient(new ProductHeaderValue("test"))
                {
                    Credentials = new Credentials(accessToken)
                };
                var githubUser = await client.User.Current();
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

                var cookieOptions = new CookieOptions();
                cookieOptions.Path = "/";
                cookieOptions.Secure = true;
                cookieOptions.IsEssential = true;
                Response.Cookies.Append("IsAuthenticated", "true", cookieOptions);
            }
            return new RedirectResult("/static/index.html");
        }

        [HttpGet]
        [Authorize]
        [Route("/profile")]
        public async Task<IActionResult> GetProfile()
        {
            // 6. From GitHub
            if (User.AccessToken() is { } accessToken)
            {
                var client = new GitHubClient(new ProductHeaderValue("test"))
                {
                    Credentials = new Credentials(accessToken)
                };
                var githubUser = await client.User.Current();
                var repo = await client.Repository.Get("silentmark", "wfrp4core-pl");
                string str = JsonConvert.SerializeObject(githubUser);
                dynamic obj = JsonConvert.DeserializeObject(str);

                if (repo != null)
                {
                    obj.Contributor = true;
                }

                return new JsonResult(obj);
            }
            return new ForbidResult("Nie zalogowany");
        }

        [HttpGet]
        [Authorize]
        [Route("/signout")]
        public async Task<IActionResult> SignOutAction()
        {
            await HttpContext.SignOutAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new AuthenticationProperties
            {
                RedirectUri = "/static/index.html"
            });
            return base.SignOut();
        }
    }
}