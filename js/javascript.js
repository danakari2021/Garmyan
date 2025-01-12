// goup
let mybutton = document.getElementById("go-up");

// show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



