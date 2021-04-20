const links = [
    {
        label:"Week1 notes",
        url: "week1/index.html"
    }
]

    var toc = document.getElementById("content")
    for (let i = 0; i<links.length; i++) {
        var item = document.createElement("li");
        var a = document.createElement("a");
        //item.appendChild(document.createTextNode(links[i].label));
        a.textContent = links[i].label
        a.setAttribute('href', links[i].url);
        item.appendChild(a);
        toc.appendChild(item);
        console.log (i);
    }
