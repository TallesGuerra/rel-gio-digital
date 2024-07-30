function atualzarTempo() {
    var display = document.querySelector('.display')

    var timeNow = new Date();

    var time = corrigirHora(timeNow.getHours()) + ':' + corrigirHora(timeNow.getMinutes()) + ':' + corrigirHora(timeNow.getSeconds());

    display.textContent = time;
}

function corrigirHora(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}


atualzarTempo();
setInterval(atualzarTempo, 1000);