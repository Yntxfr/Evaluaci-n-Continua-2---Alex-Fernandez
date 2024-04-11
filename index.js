


// Video script test
function mySuperVid1() {
    var x = document.getElementById("vidDiv1");
    if (x.style.display === "none") {
        x.style.display = "block";
    }   else {
        x.style.display = "none";
    }
}

function mySuperVid2() {
    var x = document.getElementById("vidDiv2");
    if (x.style.display === "none") {
        x.style.display = "block";
    }   else {
         x.style.display = "none";
    }
}

function mySuperVid3() {
    var x = document.getElementById("vidDiv3");
    if (x.style.display === "none") {
        x.style.display = "block";
    }   else {
        x.style.display = "none";
    }
}


// Menu items locate
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example' 
})

// Intro text quote
const box = document.getElementById('textPop');
const estadoOriginal = box.style.color;

function mouseOver() {
    box.style.color = 'blue';
}

function mouseOut() {    box.style.color = estadoOriginal;
    }

box.addEventListener('mouseenter', mouseOver); 

box.addEventListener('mouseleave', mouseOut);


// Word gif
const box2 = document.getElementById('leBack');
const frame = document.createElement('iframe');

function gifOver() {
    frame.src="https://giphy.com/embed/5EJHDSPpFhbG0";
    frame.style.width="480";
    frame.style.height="255";
    frame.style.frameBorder="0";
    box2.appendChild(frame);
}      

function gifOut() {
    box2.removeChild(frame);
}

box2.addEventListener('mouseenter', gifOver);

box2.addEventListener('mouseleave', gifOut);

// Rutinas list select
const btn = document.querySelector('#btn');
const sb = document.querySelector('#rutinas');

btn.onclick = (e) => {
    e.preventDefault();
    const selectedValues = [].filter
        .call(sb.options, option => option.selected)
        .map(option => option.text);
    alert('Rutina no disponible. Estamos trabajando en ello.');
};

// Entrenamientos list
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const ejercicios = document.querySelector('#ejercicios');

btnAdd.onclick = (e) => {
e.preventDefault();

// validate the option
if (ejercicios.value == '') {
    alert('Please enter the name.');
    return;
}

// create a new option
const option = new Option(ejercicios.value, ejercicios.value);
 // add it to the list
listbox.add(option, undefined);

// reset the value of the input
ejercicios.value = '';
ejercicios.focus();
};

// remove selected option
btnRemove.onclick = (e) => {
e.preventDefault();

// save the selected options
let selected = [];

for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
}

// remove all selected option
let index = listbox.options.length;
while (index--) {
    if (selected[index]) {
    listbox.remove(index);
    }
}
};


// Entrenamientos programa button
let btnInvalid = document.querySelector('#btnFullList');

btnInvalid.addEventListener('click', (e) => {
    let msgError = [];
                
    let msg = document.querySelector('#messageInvalid');
    msg.textContent = `Oh no! El servicio no funciona ahora mismo… ${msgError.join('+')}`;
});


// Entrenamientos series tabla
function mySeries1() {
    var x = document.getElementById("mySeries1").value;
    document.getElementById("selectResult1").innerHTML = " " + x;
}

function mySeries2() {
    var x = document.getElementById("mySeries2").value;
    document.getElementById("selectResult2").innerHTML = " " + x;
}

function mySeries3() {
    var x = document.getElementById("mySeries3").value;
    document.getElementById("selectResult3").innerHTML = " " + x;
}

function mySeries4() {
    var x = document.getElementById("mySeries4").value;
    document.getElementById("selectResult4").innerHTML = " " + x;
}

//Chrono – ref: https://codepen.io/vanessametonini/pen/GMWEBv
(() => {

let hours = `00`,
    minutes = `00`,
    seconds = `00`,
    chronometerDisplay = document.querySelector(`[data-chronometer]`),
    chronometerCall

function chronometer() {

seconds ++

if (seconds < 10) seconds = `0` + seconds

if (seconds > 59) {
    seconds = `00`
    minutes ++

    if (minutes < 10) minutes = `0` + minutes
}

if (minutes > 59) {
    minutes = `00`
    hours ++
                
    if (hours < 10) hours = `0` + hours
}

chronometerDisplay.textContent = `${hours}:${minutes}:${seconds}`

}

play.onclick = (event) => {
chronometerCall = setInterval(chronometer, 1000)
event.target.setAttribute(`disabled`,``)
}

pause.onclick = () => {
clearInterval(chronometerCall)
play.removeAttribute(`disabled`)
}

reset.onclick = () => {
clearInterval(chronometerCall)
play.removeAttribute(`disabled`)
chronometerDisplay.textContent = `00:00:00`
            
    hours = `00`,
    minutes = `00`,
    seconds = `00`
}

})()