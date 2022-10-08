let audioTurn = new Audio("bing.mpeg");

document.getElementById("button-1").onclick = function () {
    let r, g, b, appleColor;
    r = Math.round(Math.random() * 256);
    g = Math.round(Math.random() * 256);
    b = Math.round(Math.random() * 256);
    appleColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById("Color").style.backgroundColor 
    = appleColor;
    document.getElementById("color-text").innerHTML=
    appleColor;
    audioTurn.play();

}
document.getElementById("button-2").onclick = 
function(){
    audioTurn.play();
    let color="white";
    document.getElementById("Color").style.backgroundColor
    =color;
    document.getElementById("color-text").innerHTML=
    "White";
}

