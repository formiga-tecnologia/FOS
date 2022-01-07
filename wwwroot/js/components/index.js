import {Components} from '../Lavine-master/Lavine.js'


function IndexPage(param){
    let eng = new Components();
    eng.createComponent("Article1",articlePage(param))
    eng.renderComponent("appLavine","Article1")
}
function articlePage(param){
    console.log("Esta funcionando")
    return "<div> "+param+" </div>"+
    "<a  href='https://localhost:5001/Home/NewUser/#authIo/#teste'>Clique aqui</a>"
}

export default IndexPage