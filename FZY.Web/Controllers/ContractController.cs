using Abp.AutoMapper;
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
    public class ContractController : FZYControllerBase
    {
        private readonly IWebSiteAppServer _webSiteAppServer;

        public ContractController(IWebSiteAppServer webSiteAppServer)
        {
            _webSiteAppServer = webSiteAppServer;
        }

        // GET: Contract
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Index(ContractModel model)
        {
            await _webSiteAppServer.AddContractAsync(model.MapTo<ContractInput>());
            return View();
        }
    }
}