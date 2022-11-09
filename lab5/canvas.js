
function draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "FF0000";
    ctx.fillRect(0, 0, 150, 75);

    ctx.fillStyle = "rgba(0,0,200,05)"
    ctx.fillRect(50, 30, 150, 75);
}