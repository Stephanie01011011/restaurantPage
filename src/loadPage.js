import clear from "./clearPage";

function createHome(){
    //create header
    let header = document.createElement("header");
    document.body.appendChild(header);
    let headerText = document.createElement("h1");
    headerText.textContent = "Fig & Honey Cafe";
    header.appendChild(headerText);

    //create nav
    let navDiv = document.createElement("div");
    document.body.appendChild(navDiv);
    navDiv.id = "navdiv";
    let nav = document.createElement("ul");
    navDiv.appendChild(nav);
    let item1 = document.createElement("li");
    nav.appendChild(item1)
    let link1 = document.createElement("p");
    
    link1.textContent = "Home";
    link1.style.color = "white";
    item1.style.backgroundColor = "pink";
    link1.id = "homebtn";
    item1.appendChild(link1);

    let item2 = document.createElement("li");
    nav.appendChild(item2)
    let link2 = document.createElement("p");
    link2.textContent = "Menu";
    link2.id = "menubtn";
    item2.appendChild(link2);
    

    let item3 = document.createElement("li");
    nav.appendChild(item3)
    let link3 = document.createElement("p");
    link3.textContent = "Events";
    link3.id = "eventbtn";
    item3.appendChild(link3);

    let item4 = document.createElement("li");
    nav.appendChild(item4)
    let link4 = document.createElement("p");
    link4.textContent = "Contact";
    
    item4.appendChild(link4);

    let line = document.createElement("hr");
    document.body.appendChild(line);

    //create image banner
    let image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/226292/pexels-photo-226292.jpeg?auto=compress&cs=tinysrgb&w=800";
    document.body.appendChild(image);

    //create text description
    let para = document.createElement("h4");
    para.textContent = "Go on a wild adventure at your local Fig & Honey Cafe, where you can eat the most delicious baked goods around."
    document.body.appendChild(para);

    link1.addEventListener("click", clear);
    link2.addEventListener("click", clear);
    link3.addEventListener("click", clear);
    link4.addEventListener("click", clear);

    }

export default createHome;