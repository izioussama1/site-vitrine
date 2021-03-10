window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation

var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 5000);
  }
  repeater();
}
repeat();



function myFunction() {
  document.getElementById("secpay").style.display = "block";
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
document.getElementById("secpay").style.display="none";
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


function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active1');
  menu.classList.toggle('active1');
}


const btnn = document.getElementById('button')
    const inputs = document.getElementById("form1")
    btnn.addEventListener('click', () => {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username : "9f24be670e5ea9",
            Password : "79c4b30138d053",
            To : 'izioussama18@gmail.com',
            From :inputs.elements["email"].value,
            Subject : "test version 1",
            Body : "Name: " + inputs.elements["name"].value + "<br>" + "Email: " + inputs.elements["email"].value + "<br>" + "Country: " + inputs.elements["Cntr"].value + "<br>" + "Subject: " + inputs.elements["subject"].value 
     }).then(msg=>alert("The email successfully sent"))
    })
