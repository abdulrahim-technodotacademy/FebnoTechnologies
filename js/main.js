gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize ScrollSmoother
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.8,
  effects: true,
  normalizeScroll: true
});
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true
});

// $('.toggle').click(function(){
//   $('.toggle').toggleClass('open');
//   $('.toggle-nav').toggleClass('show')
// })

const toggleNav = document.querySelector('.toggle-nav');
const openBtn = document.querySelector('.toggle');  // your menu open button
const closeBtn = document.querySelector('.clsBtn a');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleNav.classList.add('show');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleNav.classList.remove('show');
});



// Example scroll-to behavior
document.querySelector("button")?.addEventListener("click", () => {
  smoother.scrollTo(".shape", true, "center center");
});

// Optional: Smooth scroll on page load if there's a hash
window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            gsap.to(smoother, {
                scrollTop: gsap.getProperty(target, "offsetTop"),
                duration: 1.2,
                ease: "power2.inOut"
            });
        }
    }
});

//

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const arrow = item.querySelector(".faq-question");

  arrow.addEventListener("click", () => {
    // close other items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // toggle current item
    item.classList.toggle("active");
  });
});




function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// SLIDER

$('.slider-item').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  dots: false,
  autoplay: false,
  autoplaySpeed: 1000,
  pauseOnHover: true
});
