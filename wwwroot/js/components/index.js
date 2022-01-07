import EngineApp from '../Lavine-master/Lavine.js'

function IndexPage(){
    let eng = new EngineApp.ComponentsEngine();
    eng.createComponent("Article1",articlePage())
    eng.renderComponent("appLavine","Article1")
}
function articlePage(){
    return "<div> Hello world </div>"
}