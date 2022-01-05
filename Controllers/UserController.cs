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
        public IActionResult Index(string name,int tipo,string nickname)
        {
            return View();
        }
        public IActionResult Users(string user)
        {
            return View(user);
        }
    }
}