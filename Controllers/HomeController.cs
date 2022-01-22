using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FOS.Models;
using System.Net.Http;
using Microsoft.Extensions.Caching.Memory;
using System.Text.Json;

namespace FOS.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMemoryCache _memoryCache;
        private const string KEYCACHE = "key1";
        public HomeController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public  async Task<IActionResult> Index()
        {
            if(_memoryCache.TryGetValue(KEYCACHE,out List<ListDelic> Teste))
            {
                return View();
            }   

            using ( var httpClient = new HttpClient()){
                var URL = "https://jsonplaceholder.typicode.com/todos";
                var response = await httpClient.GetAsync(URL);
                var responseData = await response.Content.ReadAsStringAsync();
               Teste = JsonSerializer.Deserialize<List<ListDelic>>(responseData);

                var memoryCacheEntyOptions = new MemoryCacheEntryOptions{
                AbsoluteExpirationRelativeToNow =TimeSpan.FromSeconds(3600),
                SlidingExpiration = TimeSpan.FromSeconds(1200)
                };
                _memoryCache.Set(KEYCACHE,Teste,memoryCacheEntyOptions);

                return View();
            }

        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult UserArea(string user)
        {
            return View();
        }
        public IActionResult NewUser()
        {
            return View();
        }
        public IActionResult Explore()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
