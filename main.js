const links = [{
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 Midterm Project",
        url: "week6/index.html"
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
    let current = sessionStorage.getItem('session');

    if (!current) {
        visitTotal++;
    }
    localStorage.setItem('visitCount', visitTotal);
    //console.log(localStorage)
    sessionStorage.setItem('session', true);
    document.getElementById("visitNum").innerHTML = visitTotal;
}

visitCounter()