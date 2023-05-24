$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up animation
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  
});


    // toggle menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Software Developer"],
        typeSpeed: 50,
        backSpeed: 10,
        loop: true
    });

    // owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});






// Making Linkeding & Email bigger when user scrolls down

const linkedinLink = document.getElementById("linkedin-icon");
const emailLink = document.getElementById("email-icon");

let fontSize = 16; // Initial font size in pixels

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    fontSize = 16 + scrollPosition * 0.02; 
    linkedinLink.style.color = "blue"; 
    emailLink.style.color = "blue"; 
  } else {
    fontSize = 16; 
    linkedinLink.style.color = ""; 
    emailLink.style.color = ""; 
  }

  linkedinLink.style.fontSize = `${fontSize}px`; 
  emailLink.style.fontSize = `${fontSize}px`; 
});












