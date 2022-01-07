import EngineApp from '../Lavine-master/Lavine.js'
import IndexPage from '../components/index.js'

var isCreate = false
var _baseRoutes = new EngineApp.Routes();
var _renderLavine = new EngineApp.Render();

class RoutesBase{
    routesCreated(){
        if(isCreate == false){
            _baseRoutes.registerRoute("https://localhost:5001/Home/#index",this.index)
        }
        isCreate = true
        _baseRoutes.runRoute("https://localhost:5001/Home/UserArea","https://localhost:5001/Home/#index")
        _baseRoutes.whenUpdate(_baseRoutes.runRoute("https://localhost:5001/Home/#index",this.index))
    }
    index(){
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        IndexPage()
    }
}

export default RoutesBase