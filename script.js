let workTittle = document.querySelector('work');
let breakTittle = document.querySelector('break');

let workTime = 25;
let breakTime = 5;


let segundos = "00"

// visor 
window.onload = () => {
    document.getElementById('minutos').innerHTML = workTime;
    document.getElementById('segundos').innerHTML = segundos;

    workTittle.classList.add('activo');
}

// start time
function start() {

    // mudar butão  
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // mudar o tempo 
    segundos = 59

    let workMinutos = workTime -1;
    let breakMinutos = breakTime -1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutos').innerHTML = workMinutos;
        document.getElementById('segundos').innerHTML = segundos;

        segundos = segundos -1;

        if(segundos === 0) {
            workMinutos = workMinutos -1;
            if(workMinutos === -1){
                if(breakCount % 2 === 0){
                    // start break
                    workMinutos = breakMinutos;
                    breakCount++

                    // chance painel
                    workTittle.classList.remove('activo');
                    breakTittle.classList.add('activo');
                }else{
                    // continue work
                    workMinutos = workTime;
                    breakCount++

                    // chance painel

                    breakTittle.classList.remove('activo');
                    breakTittle.classList.add('activo');
                }
            }

            segundos = 59;
        }
    }
    // start countdown
    setInterval(timerFunction, 1000);

}