using Abp.AutoMapper;
using FZY.Sys;
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

        private readonly IFileRelationAppService _relationAppService;

        public GalleryController(IWebSiteAppServer webSiteAppServer, IFileRelationAppService relationAppService)
        {
            _webSiteAppServer = webSiteAppServer;
            _relationAppService = relationAppService;
        }

        // GET: Gallery
        public async Task<ActionResult> Index(int id)
        {
           var model =( await _webSiteAppServer.GetProductByIdAsync(id)).MapTo<ProductModel>();
            ViewBag.FileList  = await _relationAppService.GetFileRDtoList(new Sys.Dto.FileRInput() { KeyId = id, ModuleType = ModuleType.ProductDetail });
            return View(model);
        }

        public async Task<ActionResult> List()
        {
            var list = await _webSiteAppServer.GetProductListAsync(new WebSite.Dto.GetProductListInput() {  PageIndex = 1,PageCount = 100});
            var list2 = await _webSiteAppServer.GetCategoryListAsync(new WebSite.Dto.GetProductListInput() {  PageIndex = 1,PageCount = 100});
            return View(new GalleryListDto(list.Rows,list2.Rows));
        }

    }
}