let voltage = document.getElementById('voltage');
let phase = document.getElementById('phase');
let motorPowerRating = document.getElementById('motorPR');
let type = document.getElementById('type');
let motorPowerFactor = document.getElementById('motorPF');
let motorEfficieny = document.getElementById('motorE');
let button = document.getElementById('calculate');
let motorOutput =document.getElementById('motorOutput');



function changeColor() {
    button.style.backgroundColor = 'red';
}
function returnColor() {
    button.style.backgroundColor = '';
}
button.addEventListener('mouseover', changeColor);
button.addEventListener('mouseleave', returnColor);

function getVoltage(){
    motorOutput.innerHTML = motorEfficieny.value;
}

button.addEventListener('click', runCalculator);

function runCalculator(){
let current;
if(phase.value === '3 Phase' && type.value === 'kW'){
  current = motorPowerRating.value / (voltage.value * 1.732 * motorPowerFactor.value)
  current *= 1000;
  motorOutput.innerHTML = 'Motor Current = ' + Math.floor(current) + ' A';
}else if(phase.value === '3 Phase' && type.value === 'hp'){
    motorOutput.innerHTML = '2';
}else if(phase.value === '1 Phase' && type.value === 'kW'){
    motorOutput.innerHTML = '3';
}else if(phase.value === '1 Phase' && type.value === 'hp'){
    motorOutput.innerHTML = '4';
}else{
    motorOutput.innerHTML = 'Invalid';
}
}
