using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Wfrp.Service.Controllers
{
    [Route("")]
    public class ContentController : ControllerBase
    {
        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login()
        {
            var html = System.IO.File.ReadAllText(@"./static/index.html");
            return new ContentResult
            {
                Content = html,
                ContentType = "text/html",
                StatusCode = 200
            };
        }
    }
}