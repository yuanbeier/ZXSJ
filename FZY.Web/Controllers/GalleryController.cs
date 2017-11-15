using FZY.Web.Models.WebSite;
using FZY.WebSite;
using FZY.WebSite.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace FZY.Web.Controllers
{
    public class GalleryController : Controller
    {
        private readonly IWebSiteAppServer _webSiteAppServer;

        public GalleryController(IWebSiteAppServer webSiteAppServer)
        {
            _webSiteAppServer = webSiteAppServer;
        }

        // GET: Gallery
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> List()
        {
            var list = await _webSiteAppServer.GetProductListAsync(new WebSite.Dto.GetProductListInput() {  PageIndex = 1,PageCount = 100});
            var list2 = await _webSiteAppServer.GetCategoryListAsync(new WebSite.Dto.GetProductListInput() {  PageIndex = 1,PageCount = 100});
            return View(new GalleryListDto(list.Rows,list2.Rows));
        }

    }
}