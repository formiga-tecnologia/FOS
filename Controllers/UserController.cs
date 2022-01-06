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
    public class UserController : Controller
    {
        public IActionResult Page(string id){
            if(id == null){
                return Redirect("~/Hub/Error");
            }
            if(id =="Felipe"){
                ViewBag.TypeUser = "User";
            }
            else{
                ViewBag.TypeUser = "Visitor";
            }
            return View();
        }
    }
}