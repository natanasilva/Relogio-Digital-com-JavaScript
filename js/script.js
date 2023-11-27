setInterval(function(){
    
    let horaAgora = new Date();

    let hora = horaAgora.getHours();
    let minuto = horaAgora.getMinutes();
    let segundo = horaAgora.getSeconds();

    minuto = zero(minuto);
    segundo = zero(segundo);

    document.querySelector(".relogio").innerHTML = hora+':'+minuto+':'+segundo; 
},1000);

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}


