
var svgNS = "http://www.w3.org/2000/svg";

function criarCirculo(evt) {
   var randomX = Math.floor( Math.random() * document.rootElement.getAttributeNS(null, "width")   );
   var randomY = Math.floor( Math.random() * document.rootElement.getAttributeNS(null, "height")  );
   var color = "rgb(" + Math.floor(Math.random() * 256) +", "+ Math.floor(Math.random() * 256) +", "+ Math.floor(Math.random() * 256) +")";

   var circulo = document.createElementNS(svgNS, "circle");
   circulo.setAttributeNS(null, "cx", randomX);
   circulo.setAttributeNS(null, "cy", randomY);
   circulo.setAttributeNS(null, "fill", color);
   circulo.setAttributeNS(null, "r", evt.target.getAttributeNS(null, "r"));
   
   circulo.addEventListener("click", criarCirculo, false);
   
   evt.target.parentNode.appendChild(circulo);
}