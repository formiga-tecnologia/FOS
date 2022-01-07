import {Routes} from '../Lavine-master/Lavine.js'
import {Render} from '../Lavine-master/Lavine.js'
import IndexPage from '../components/index.js'

var isCreate = false
var _baseRoutes = new Routes();
var _renderLavine = new Render();

class RoutesBase{
    routesCreated(){
        if(isCreate == false){
            _baseRoutes.registerRoute("https://localhost:5001/#index",this.index)
        }
        isCreate = true
        _baseRoutes.runRoute("https://localhost:5001/","https://localhost:5001/#index")
        _baseRoutes.whenUpdate(_baseRoutes.runRoute("https://localhost:5001/#index","https://localhost:5001/#index"))
    }
    index(){
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        IndexPage()
    }
}

export default RoutesBase