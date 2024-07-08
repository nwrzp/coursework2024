$( "#burger" ).click(function check() {
    $( this ).toggleClass( "burgeractive");
  });


  menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
 }

// login page
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// product page
