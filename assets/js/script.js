window.onload = function() {

    const inserirZero = time => time < 10 ? `0${time}` : time;

    const com = function(time) {
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

    setInterval(() => {
        const hora = document.querySelector('#hora');
        const minuto = document.querySelector('#minuto');
        const segundo = document.querySelector('#segundo');
        const msg = document.querySelector('#msg');

        const dataTime = new Date();
        const getHora = dataTime.getHours();
        const getMinuto = dataTime.getMinutes();
        const getSegundo = dataTime.getSeconds();

        const comprimento = com(getHora);

        hora.textContent = inserirZero(getHora);
        minuto.textContent = inserirZero(getMinuto);
        segundo.textContent = inserirZero(getSegundo);
        msg.textContent = comprimento;
    }, 1000);

};