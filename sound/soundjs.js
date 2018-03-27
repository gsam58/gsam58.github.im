

function start() {
    document.getElementById("startbutton").style.display="none"; 
}

let startsound = document.getElementById('creak');
document.getElementById("startbutton").addEventListener("click", dooropen);

function dooropen() {
    creak.play()
}

let startlink = document.getElementById('startlink');
startlink.onclick = () => {
    line1.style.display = "block";
    startlink.style.display = "none";
    faststeps.play()
}
let line1 = document.getElementById('line1');
let faststeps = document.getElementById('faststeps');
let two = document.getElementById('two')
line1.onclick = () => {
        line2.style.display = "block";
        line1.style.display = "none";
        two.play()
}
let line2 = document.getElementById('line2');
line2.onclick = () => {
    three.play()
    line3.style.display = "block";
    line2.style.display = "none";
}
let line3 = document.getElementById('line3');
line3.onclick = () => {
    four.play()
    line4.style.display = "block";
    line3.style.display = "none";
}
let line4 = document.getElementById('line4');
line4.onclick = () => {
    five.play()
    line5.style.display = "block";
    line4.style.display = "none";
}
let line5 = document.getElementById('line5');
line5.onclick = () => {
    six.play()
    line6.style.display = "block";
    line5.style.display = "none";
}
let line6 = document.getElementById('line6');
line6.onclick = () => {
    faststeps.play()
    line1.style.display = "block";
    line6.style.display = "none";
}





// ------------------------------------------------------------
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("startbutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    btn.style.display ="none";
    startlink.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// -------------------------------------------------


let col1 = document.getElementById('column1')
let col2 = document.getElementById('column2')
let col3 = document.getElementById('column3')

col1.onmouseenter = () => {
    console.log('yes')
    col1.style.opacity= 1;
    
}

col1.onmouseleave = () => {
    console.log('yes')
    col1.style.opacity= 0.2;
    
}

col2.onmouseenter = () => {
    console.log('yes')
    col2.style.opacity= 1;
    
}

col2.onmouseleave = () => {
    console.log('yes')
    col2.style.opacity= 0.2;
    
}

col3.onmouseenter = () => {
    console.log('yes')
    col3.style.opacity= 1;
    
}

col3.onmouseleave = () => {
    console.log('yes')
    col3.style.opacity= 0.2;
    
}