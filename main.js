const links = [
    {
        label:"Week1 notes",
        url: "week1/index.html"
    }
]


    var toc = document.getElementById("tableOfContents")
    console.log(toc)
    for (let i = 0; i<links.length; i++) {
        console.log (i);
        var item = document.createElement("li");
        var a = document.createElement("a");
        console.log(toc)
        //item.appendChild(document.createTextNode(links[i].label));
        a.textContent = links[i].label;
        a.setAttribute('href', links[i].url);
        item.appendChild(a);
        toc.append(item);
        
    }
