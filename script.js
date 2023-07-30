
//toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('bx-active');
}





//scroll sections active link

let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');


window.onscroll=() => {
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

     //making navbar stikcy
    let header= document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
 
  ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay:200
  });

  ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
  ScrollReveal().reveal('.home-img, .about-img, .services-container,  .contact .container .email ', {origin:'bottom'});
  ScrollReveal().reveal(' #one', {origin:'left'});
  ScrollReveal().reveal( '#two, .about-content ', {origin:'right'});
//typedjs

const typed= new Typed('.text',{
  strings:['Full-Stack Web Developer'],
  typeSpeed:100,
 
});
