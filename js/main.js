
var label, url;
const labels = [
    "Week 01: Notes",
    "Week 01: Exercise"
]
const links = [
    "week1/notes.html",
    "week1/storyeditor.html"
]

var i, x, y, z; 

for (i=0; i<links.length; i++){
z = document.createElement("li")
x = document.createElement("A");
y = document.createTextNode(labels[i]);
x.setAttribute("href", links[i]);
x.appendChild(y);
z.appendChild(x)
document.getElementById("tableContents").appendChild(z);
}

