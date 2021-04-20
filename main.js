const links = [
    {
        label:"Week1 notes",
        url: "week1/index.html"
    }
]

    var toc = document.getElementById("content")
    for (let i = 0; i<links.length; i++) {
        var item = document.createElement("li");
        //item.appendChild(document.createTextNode(links[i].label));
        item.textContent = links[i].label
        item.setAttribute('href', links[i].url);
        toc.appendChild(item);
        console.log (i);
    }
