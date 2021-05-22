const links = [{
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Weel 5 notes",
        url: "week5/index.html"
    }
]


var toc = document.getElementById("tableOfContents")
for (let i = 0; i < links.length; i++) {
    //console.log(i);
    var item = document.createElement("li");
    var a = document.createElement("a");
    //item.appendChild(document.createTextNode(links[i].label));
    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    item.appendChild(a);
    toc.append(item);

}

function visitCounter() {
    let visitTotal = localStorage.getItem('visitCount');
    
    visitTotal++;

    localStorage.setItem('visitCount', visitTotal);
    //console.log(localStorage)
    document.getElementById("visitNum").innerHTML = visitTotal;

}   

visitCounter()