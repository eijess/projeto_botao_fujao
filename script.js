function fuja(){
    var botaoRecusar = document.getElementById("recusar")
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoRecusar.offsetWidth;
    var maxY = alturaJanela - botaoRecusar.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoRecusar.style.left = aleatorioX + "px";
    botaoRecusar.style.top = aleatorioY + "px";
}

