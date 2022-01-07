// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

import EngineApp from './Lavine-master/Lavine.js'
let _routesBase =  new EngineApp.Routes();

class Index{
    Lavine = new EngineApp.Routes();
    registerRoutes(){
        this.Lavine.registerRoute("",this.teste)
    }
    teste(){
        console.log("Seja bem vindo a Lavine App")
    }
}

