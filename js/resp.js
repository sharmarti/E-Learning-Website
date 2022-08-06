burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})


$('#login').click(function () {
    $('.login-form').addClass('popup');
});

$('.login-form form .fa-times').click(function () {
    $('.login-form').removeClass('popup');
});



// var login = document.getElementById('login-form');
// var register = document.getElementById('register');
// var btn = document.getElementById('btn');

//  function register()
// {
//      login.style.left = '-400px';
//      register.style.left = '50px';
//      btn.style.left = '110px';
// }

// function login()
// {
//     login.style.left = '50px';
//     register.style.left = '450px';
//     btn.style.left = '0px';
// }

// var modal = document.getElementById('login');
// window.onclick = function (event)
// {
//     if (event.target == modal)
//     {
//         modal.style.display = "none"
//     }
// }

// $('#login').click(function(){
//     $('login-form').addClass('popup');
// })