const links = [{
        label: "Week 1 Notes",
        url: "week1/index.html",
        block: 1
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html",
        block: 1
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html",
        block: 1
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html",
        block: 1
    },
    {
        label: "Week 5 Notes",
        url: "week5/index.html",
        block: 1
    },
    {
        label: "Week 6 Midterm Project",
        url: "week6/index.html",
        block: 1
    },
    {
        label: "Week 7 Notes",
        url: "week7/index.html",
        block: 2
    },
    {
        label: "Week 8 Notes",
        url: "week8/index.html",
        block: 2
    }
]


const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")

for (let i = 0; i < links.length; i++) {
    //console.log(i);
    var item = document.createElement("li");
    var a = document.createElement("a");
    //item.appendChild(document.createTextNode(links[i].label));
    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    item.appendChild(a);
    if (links[i].block == 1) {
        block1.append(item);
    } else {
        block2.append(item);
    }
    

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