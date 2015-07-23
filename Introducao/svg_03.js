
     var circulos;
     
     function init() {
        circulos = document.getElementsByTagName("circle");
        setInterval("mover()", 100);
     }
     function randPos() {
        var trocaSinal = Math.floor(Math.random() * 3);
        var sinal = 1;
        if (trocaSinal == 0) { 
           sinal = -1; 
        }
     	return Math.ceil(Math.random() * 25) * sinal;
     }
     function mover() {
        for(var i = 0; i &lt; circulos.length; i++) {
           var x = parseInt( circulos[i].getAttribute("cx") );
           var y = parseInt( circulos[i].getAttribute("cy") );
     	   circulos[i].setAttribute("cx", x = x + randPos());
     	   circulos[i].setAttribute("cy", y = y + randPos());
     	}
     }