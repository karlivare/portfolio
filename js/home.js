const navSlide = () =>{ /*creating anonymous function*/
  let body = document.querySelector('body');
  let main = document.querySelector('main');
  let html = document.querySelector('html');
  
  let burger = document.querySelector('.burger'); /*get a reference to the burger menu*/
  let nav = document.querySelector('.nav-links'); /*get a reference to the entire ul*/
  let navLinks = document.querySelectorAll('.nav-links li'); /*get a reference ALL to the individual links inside the ul*/

  let sectionIntro = document.getElementById('intro');
  let sectionSkills = document.getElementById('skills');
  let sectionProjectsText = document.getElementById('projects-text');
  let sectionProjectsPreview = document.getElementById('projects-preview');

  //boolean and variable to help with hidding and making other homepage sections reappear in correlation with nav sliding in and out
  let timeDelay;
  let navOpen = false;
  
  burger.addEventListener('click', ()=>{ //when burger menu is clicked, run this function
    //toggle nav
    nav.classList.toggle('nav-active'); //add or remove the class nav-active to the nav. this will translate the nav to 0%, making it come into the viewport
    
    //stop horizontal scrolling when nav is open
    // html.style.overflowY = 'hidden';

    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/4 + 0.25}s`;
    });

    //burger animation
    burger.classList.toggle('toggle'); //animates the burger menu lines

    //implementing setTimeout makes the sliding transition appear smoother
    if(navOpen){
      timeDelay = 0;
    } else{
      timeDelay = 500;
    }
    setTimeout(() => {
      main.classList.toggle('hide')
      body.classList.toggle('body-position')
    }, `${timeDelay}`)

    if(navOpen == false){
      navOpen = true;
    }else{
      navOpen = false;
    }
  })
}
navSlide();









