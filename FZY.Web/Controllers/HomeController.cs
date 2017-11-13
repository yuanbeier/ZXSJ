using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;
using FZY.WebSite;
using System.Threading.Tasks;

namespace FZY.Web.Controllers
{
    public class HomeController : FZYControllerBase
    {
        private readonly IWebSiteAppServer _webSiteAppServer;

        public HomeController(IWebSiteAppServer webSiteAppServer)
        {
            _webSiteAppServer = webSiteAppServer;
        }
        public async Task<ActionResult> Index()
        {
            var list =  await _webSiteAppServer.GetHomePicListAsync();
            return View(list);
        }
	}
}