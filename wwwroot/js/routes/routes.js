import { Routes } from '../Lavine-master/Lavine.js'
import { Render } from '../Lavine-master/Lavine.js'
import IndexPage from '../components/index.js'

var isCreate = false
var _baseRoutes = new Routes();
var _renderLavine = new Render();

class RoutesBase {
    //Definir que isso é  um conceito SPA onde uma unica pagina pode carregar varios componentes
    //E não de rotas direcionadas!! 

    //Rotas Padrão
    HomeRoutes() {
        //https://localhost:5001/Home/NewUser/?id=felipe/#teste
        //Apenas para testes
        _baseRoutes.RedirectRouteErrorOrDefault = "https://localhost:5001/#teste"
        _baseRoutes.registerRoute("https://localhost:5001/#teste", this.index)
        _baseRoutes.registerRoute("https://localhost:5001/#localizate", this.pagina3)
        _baseRoutes.registerRoute("https://localhost:5001/#permalink", this.index)
        //Testar casos de condição do Nestd Routes
        _baseRoutes.nestRoutes(window.location.href,"https://localhost:5001",6);
        if (isCreate == false) {
            _baseRoutes.registerRoute("https://localhost:5001/#teste", this.index)
            _baseRoutes.registerRoute("https://localhost:5001/#index", this.index)
            _baseRoutes.registerRoute("https://localhost:5001/#sobre", this.pagina2)
            _baseRoutes.registerRoute("https://localhost:5001/#updates", this.pagina3)
        }
        isCreate = true
        _baseRoutes.runRoute("https://localhost:5001/#", "https://localhost:5001/#index")
        _baseRoutes.whenUpdate(_baseRoutes.runRoute("https://localhost:5001/#", "https://localhost:5001/#index"))
    }
    NewUserRoutes(){
        if (isCreate == false) {
            _baseRoutes.registerRoute("https://localhost:5001/#index", this.index)
        }
        isCreate = true

        _baseRoutes.runRoute("https://localhost:5001/Home/NewUser", "https://localhost:5001/Home/NewUser/#index")
        _baseRoutes.whenUpdate(_baseRoutes.runRoute("https://localhost:5001/Home/NewUser/#index", "https://localhost:5001/Home/NewUser/#index"))
    }
    //Componentes das rotas 
    index() {
        console.log("teste")
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        IndexPage("teste")
    }p
    pagina2() {
        console.log("Sobre")
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        IndexPage("Sobre")
    }
    pagina3() {
        console.log("Updates")
        _renderLavine.registerDinamicPage("appLavine")
        _renderLavine.clearPage()
        IndexPage("Updates")
    }
}

export default RoutesBase