// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import RoutesBase  from './routes/routes.js'
var _registerRoutes = new RoutesBase()

if(window.location.href.includes("https://localhost:5001/#"))
{
    _registerRoutes.HomeRoutes()
}
if(window.location.href.includes("https://localhost:5001/Home/NewUser/#"))
{
    _registerRoutes.NewUserRoutes()
}
if(window.location.href.includes("https://localhost:5001/Home/NewUser/?id=felipe")){
    _registerRoutes.HomeRoutes()
}