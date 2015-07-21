var x   = 50.0;
var fim = 450.0;
var barquinho;

function iniciarMovimento(evt) {
    barquinho = evt.target;
    mover();
}
function mover() {
    if (x >= fim) {
        return;
    }
    x = x + 1;
    
    barquinho.setAttributeNS(null, 'transform', "translate(" + x + ",140)");
    if (x > 100) {
        barquinho.setAttributeNS(null, 'opacity', (fim - x) / fim);
    }
    setTimeout("mover()", 30);
}