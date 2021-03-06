﻿using Abp.AutoMapper;
using FZY.WebSite.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FZY.Web.Models.WebSite
{
    [AutoMap(typeof(ContractInput))]
    public class ContractModel
    {
        /// <summary>
        /// 名称
        /// </summary>
        [MaxLength(50)]
        public string Name { set; get; }

        /// <summary>
        /// 电话
        /// </summary>
        public string Tel { set; get; }

        /// <summary>
        /// 邮箱
        /// </summary>
        public string Email { set; get; }

        /// <summary>
        /// 手机
        /// </summary>
        public string Mobile { set; get; }

        /// <summary>
        /// 描述
        /// </summary>
        [MaxLength(200)]
        public string Message { set; get; }
    }
}