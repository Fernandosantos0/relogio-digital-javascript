'use strict'

window.onload = function() {
    
    const inserirZero = time => time < 10 ? `0${time}` : time;

    const msgText = function(time) {
        time = Number.parseInt(time);

        if(time < 6) {
            return 'Bom madrugada!'
        }

        if(time < 12) {
            return 'Bom dia!';
        }

        if(time < 18) {
            return 'Boa tarde!';
        }

        if(time <= 23) {
            return 'Boa noite!';
        }

        if(time > 23) {
            return 'Erro!';
        }

    };

    const mudaFundo = function(time) {
        switch(time) {
            case 'Bom madrugada!':
                document.body.style.backgroundImage = 'url(assets/images/bg-madrugada.jpg)';
                break;

            case 'Bom dia!':
                document.body.style.backgroundImage = 'url(assets/images/bg-dia.jpg)';
                break;

            case 'Boa tarde!':
                document.body.style.backgroundImage = 'url(assets/images/bg-tarde.jpg)';
                break;

            case 'Boa noite!':
                document.body.style.backgroundImage = 'url(assets/images/bg-noite.jpg)';
                break;

            case 'Erro!':
                document.body.style.backgroundColor = 'hsl(4°, 65%, 57%)';
                break;

            default:
                document.body.style.backgroundImage = 'url(assets/images/bg-img.jpg)';
                break;
        }
    };

    setInterval(() => {
        const hora = document.querySelector('#hora');
        const minuto = document.querySelector('#minuto');
        const segundo = document.querySelector('#segundo');
        const msg = document.querySelector('#msg');

        const dataTime = new Date();
        const getHora = dataTime.getHours();
        const getMinuto = dataTime.getMinutes();
        const getSegundo = dataTime.getSeconds();

        const comprimento = msgText(getHora);
        mudaFundo(comprimento);

        hora.textContent = inserirZero(getHora);
        minuto.textContent = inserirZero(getMinuto);
        segundo.textContent = inserirZero(getSegundo);
        msg.textContent = comprimento;
    }, 1000);
};