using FZY.WebSite.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FZY.Web.Models.WebSite
{
    /// <summary>
    /// 
    /// </summary>
    public class GalleryListDto
    {
        public IReadOnlyList<ProductOutput> ProductOutputList { set; get; }

        public IReadOnlyList<CategoryOutput> CategoryOutputList { set; get; }

        public GalleryListDto(IReadOnlyList<ProductOutput> productOutput , IReadOnlyList<CategoryOutput> categoryOutputList)
        {
            CategoryOutputList = categoryOutputList;
            ProductOutputList = productOutput;
        }
    }
}