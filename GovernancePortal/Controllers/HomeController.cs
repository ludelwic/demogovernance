﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace GovernancePortal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Governance()
        {
            return View();
        }
        public IActionResult Info()
        {
            return View();
        }
        public IActionResult RequestPage()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult TrackOptimize()
        {
            return View();
        }
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
