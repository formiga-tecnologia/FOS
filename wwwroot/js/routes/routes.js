import EngineApp from '../Lavine-master/Lavine.js'

var isCreate = false
var _baseRoutes = new EngineApp.Routes();
var _renderLavine = new EngineApp.Render();

class RoutesBase{
    routesCreated(){
        if(isCreate == false){
            _baseRoutes.registerRoute("","")
        }
        isCreate = true
        _baseRoutes.runRoute("","")
        _baseRoutes.whenUpdate(_baseRoutes.runRoute("",""))
    }
    index(){
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        

    }
}