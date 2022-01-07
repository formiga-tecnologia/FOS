import {Components} from '../Lavine-master/Lavine.js'


function IndexPage(){
    let eng = new Components();
    eng.createComponent("Article1",articlePage())
    eng.renderComponent("appLavine","Article1")
}
function articlePage(){
    console.log("Esta funcionando")
    return "<div> Hello world </div>"
}

export default IndexPage