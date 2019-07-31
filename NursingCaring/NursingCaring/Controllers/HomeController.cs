using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NursingCaring.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Hello()
         {
            //PS:ViewData和ViewBag內的資料都是透過Key/Value的方法來存取，
            //但請注意在同個頁面中他們的key值還是不能重複，否則將會出現問題。


            //正確版
            ViewData["Hello"] = "Hello World";
            ViewBag.MVC = "Hello MVC"; // ViewBag 使用的動態產生的屬性

            //問題版-重複key值
            ViewData["Error"] = "Error 1";
            ViewBag.Error = "Error 2";

            return View();
         }
    }
}