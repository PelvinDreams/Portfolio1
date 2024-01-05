
// SERVICES TOGGLE

const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

// A FUNCTION
const getServices = (category) => {
    const details = servicesData.find(item => item.category === category);
  serviceDetails.innerHTML = `<h3>${details.title}</h3>
  ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}  
`
}


const removeActiveClass = () => {
  servicesButtons.forEach(button => {
    button.classList.remove('active');
  })
}


servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
      removeActiveClass();
        const serviceClass = item.classList[1];
      getServices(serviceClass)
      item.classList.add('active')
    })
})

getServices('frontend')


// MIXITUP (projects section)
const containerEI = document.querySelector('.projects__container');
var mixer = mixitup(containerEI);

mixer.filter('*');



// SWIPER (testimonies section)
const swiper = new Swiper('.swiper', {

 slidesPerView: 1,
 spaceBetween: 30,
 pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },

 breakpoints: {
  600: {
    slidesPerView: 2,
  }, 
  1024: {
    slidesPerView: 3,
  }
 }
});








// NAV TOGGLE FOR (small screen)
const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')



const openNavHandler = () => {
  navMenu.style.display = 'flex';
   navOpenBtn.style.display = 'none';
   navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
  navMenu.style.display = 'none';
   navOpenBtn.style.display = 'inline-block';
   navCloseBtn.style.display = 'none';
}


navOpenBtn.addEventListener('click', openNavHandler) 
navCloseBtn.addEventListener('click', closeNavHandler) 


//  close nav menu on click of nav link on small screens
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
  navItems.forEach(item => {
    item.addEventListener('click', closeNavHandler)
  })

}

// LIght and Dakr Mode
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;
  if(!bodyClass) {
    bodyClass = 'dark';
    document.body.className = bodyClass;
    // change toggle icon
    themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
    //save theme to local storage
    window.localStorage.saveItem('theme', bodyClass);
  } else {
    bodyClass = '';
    document.body.className = bodyClass;
      // change toggle icon
      themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
       //save theme to local storage
    window.localStorage.saveItem('theme', bodyClass);
  }
})

// load theme on load
window.addEventListener('load', () => {
  document.body.className = window.localStorage.getItem('theme');
})


const sr = ScrollReveal({
    distance: '40px',
    duration: '2050',
    delay: '200',
    reset: true
});

