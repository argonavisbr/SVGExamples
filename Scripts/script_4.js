
var svgNS = "http://www.w3.org/2000/svg";
var circulo;
var x = 0;
var forward = true;

function moverCirculo(evt) {
    circulo = evt.target;
    movimento();
}

function movimento() {
    if (x >= 200) {
       forward = false;
    }
    if (x <= 0) {
       forward = true;
    }
    
    if (forward) {
       x++;
    } else {
       x--;
    }
    circulo.setAttributeNS(null, 'transform', "translate(" + x + ",0)");
    setTimeout('movimento()', 20);
}