import createHome from "./loadPage";
import createMenu from "./loadMenu";
import createEvent from "./loadEvents";
function clear(){

    document.body.innerHTML = "";
    console.log(event.target.id)
    if(event.target.id == "homebtn"){
        createHome();
    } else if(event.target.id == "menubtn"){
        createMenu();
    } else if(event.target.id == "eventbtn"){
        createEvent();
    }
}

export default clear;