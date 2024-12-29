// Display navbar menu 
$(document).ready(function() {
     $(".menu-icon").click(function() {
        $(".dropdown").slideToggle(800);
    });
 });
 

// code to change navbar style on scroll 
 window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.mobileNavbar');
  const desknavbar = document.querySelector('.desktopNavbar');
  if (window.pageYOffset > 50) {
    navbar.classList.add('navScroll');
    desknavbar.classList.add('desktopNavScroll');
  } else {
    navbar.classList.remove('navScroll');
    desknavbar.classList.remove('desktopNavScroll');    
  }
});


// code to update year
let currentYear = document.querySelector('#year');
  
 let showDate = new Date();
// currentYear.style.color = '#fff';
 currentYear.innerText = showDate.getFullYear();
 
 
 
const boxes = document.querySelectorAll('.fadein');
const boxes2 = document.querySelectorAll('.zoomIn');

function fadeInRightOnScroll() {
  boxes.forEach(fadein => {
    const boxTop = fadein.getBoundingClientRect().top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (boxTop < windowHeight) {
      fadein.style.opacity = '1';
      fadein.style.transform = 'translateX(0)';
    }
  });
}

function zoomInOnScroll() {
  boxes2.forEach(zoomIn => {
    const boxZoom = zoomIn.getBoundingClientRect().top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (boxZoom < windowHeight) {
      zoomIn.style.opacity = '1';
      zoomIn.style.transform = 'scale(1)';
    }
  });
}


function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.addEventListener('scroll', throttle(fadeInRightOnScroll, 200));
window.addEventListener('resize', throttle(fadeInRightOnScroll, 200));

window.addEventListener('scroll', throttle(zoomInOnScroll, 200));
window.addEventListener('resize', throttle(zoomInOnScroll, 200));


fadeInRightOnScroll();
zoomInOnScroll();
 // To ensure elements are visible when the page is loaded
 