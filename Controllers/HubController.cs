using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FOS.Models;

namespace FOS.Controllers
{
    public class HubController: Controller{
        public IActionResult Index(string hubEnv){
            if(hubEnv == null){
                return Redirect("~/Hub/Error");
            }
            return View();
        }
        public IActionResult Error(string DataErro){
            return View();
        }
    }
}