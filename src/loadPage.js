
function createPage(){
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
    let link1 = document.createElement("a");
    link1.textContent = "Home";
    link1.href = "index.html";
    item1.appendChild(link1);

    let item2 = document.createElement("li");
    nav.appendChild(item2)
    let link2 = document.createElement("a");
    link2.textContent = "Menu";
    link2.href = "/";
    item2.appendChild(link2);
    

    let item3 = document.createElement("li");
    nav.appendChild(item3)
    let link3 = document.createElement("a");
    link3.textContent = "Events";
    link3.href = "/";
    item3.appendChild(link3);

    let item4 = document.createElement("li");
    nav.appendChild(item4)
    let link4 = document.createElement("a");
    link4.textContent = "Contact";
    link4.href = "/";
    item4.appendChild(link4);

    let line = document.createElement("hr");
    document.body.appendChild(line);

    //create image banner
    let image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/226292/pexels-photo-226292.jpeg?auto=compress&cs=tinysrgb&w=800";
    document.body.appendChild(image);

    //create text description
    let para = document.createElement("p");
    para.textContent = "Go on a wild adventure at your local Fig & Honey Cafe, where you can eat the most delicious baked goods around."
    document.body.appendChild(para);

    

    }

export default createPage;