function changeWidth(width) {
    document.getElementById("firstTable").style.width = width + "px";
}

function changeBorder(width) {
    target = document.getElementById("firstTable");
    target.style.borderSpacing = width + "px";
    target.style.border = width + "px solid black";
}

function changeColor(color) {
    const myTd = document.getElementsByTagName("td");
    for (let i = 0; i < myTd.length; i++) {
        myTd[i].style.backgroundColor = color;
    }
    document.getElementById("firstTable").style.backgroundColor = color;
}

function reset () {
    changeWidth(200);
    changeBorder(1);
    const nodes = document.getElementsByTagName("th");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.backgroundColor = "burlywood";
    }
    const myTd = document.getElementsByTagName("td");
    for (let i = 0; i < myTd.length; i++) {
        myTd[i].style.backgroundColor = "hotpink";
    }
    document.getElementById("firstTable").style.backgroundColor = "white";

}