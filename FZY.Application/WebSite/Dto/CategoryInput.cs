using System;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;

namespace FZY.WebSite.Dto
{
    /// <summary>
    /// 产品类别
    /// </summary>
    [AutoMap(typeof(Category))]
    public class CategoryInput
    {
        /// <summary>
        /// 产品Id
        /// </summary>
        public int? Id { set; get; }

        /// <summary>
        /// 类别名称
        /// </summary>
        public string Name { set; get; }

        /// <summary>
        /// 类别描述
        /// </summary>
        [MaxLength(500)]
        public string Description { set; get; }

        /// <summary>
        /// 文件Id
        /// </summary>
        public string FileId { set; get; }


        /// <summary>
        /// 排序
        /// </summary>
        public int Sort { set; get; }
    }
}
