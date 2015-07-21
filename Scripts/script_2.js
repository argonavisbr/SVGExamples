/* funcoes para arquivo script_2.svg */

function trocaLugar(evt) {
    var rect = document.getElementsByTagName("rect").item(0);
    var circle = document.getElementsByTagName("circle").item(0);
    if (rect.getAttribute("x") == 50) {
        rect.setAttribute("x", "175");
        circle.setAttribute("cx", "100");
    } else {
        rect.setAttribute("x", "50");
        circle.setAttribute("cx", "225");
    }
}

function trocaCor(evt) {
    var elemento = evt.target;
    if (elemento.getAttribute("fill") == "yellow") {
       elemento.setAttribute("fill", "purple");
    } else if (elemento.getAttribute("fill") == "purple") {
       elemento.setAttribute("fill", "blue");
    } else if (elemento.getAttribute("fill") == "blue") {
       elemento.setAttribute("fill", "green");
    } else {
       elemento.setAttribute("fill", "yellow");
    } 
}

var angulo = 0;
function gira(evt) {
   if (angulo <= 360) {
      angulo += 45;
   } else {
      angulo = 0;
   }
   evt.target.setAttribute("transform", "rotate("+angulo+", 300, 50)");
}

