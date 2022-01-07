// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import routes  from './routes/routes.js'
import EngineApp from './Lavine-master/Lavine.js'
var _routesBase =  new EngineApp.Routes();
var _registerRoutes = new routes()

_registerRoutes.routesCreated()

if(window.location.href == 'https://localhost:5001/Home/'){
    _routesBase.goToLink('https://localhost:5001/Home/#index')
}

