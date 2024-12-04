function NavarAnimation() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // var links = document.querySelectorAll('.navbar ul li a');
    const logo = document.querySelector('.top_logo');

    const isScrolled = window.scrollY > 50;
    // navbar.style.backgroundColor = isScrolled ? "var(--transparent)" : "transparent";
    navbar.style.backdropFilter = isScrolled ? "blur(10px)" : "blur(0px)";
    navbar.style.boxShadow = isScrolled ? "0px 0px 5px 1px var(--blacktransparent)" : "none";
    // links.forEach(link => {
    //   link.style.color = isScrolled ? "var(--creamclr)" : "var(--black)";
    // });
    if (window.innerWidth > 992) {
      // navbar.style.padding = isScrolled ? "1rem 0" : "1.5rem 0";
      logo.style.width = isScrolled ? "5.5%" : "10%";
      // navbar.style.backdropFilter = isScrolled ? "blur(10px)" : "blur(0px)";
    } else {
      // navbar.style.padding = isScrolled ? ".5rem 0" : "1rem 0";
    }

  });

  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
  });
}

// document.querySelectorAll('.link_hover').forEach(link => {
//   link.addEventListener('click', () => {
//     document.querySelector('.toggler').classList.remove('active');
//   });
// });

NavarAnimation();

//===BANNER---SWIPER---START===//

var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1200,
    effect: 'fade',
    autoplay: {
        delay: 3700,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  });
  
  
  //===BANNER---SWIPER---END===//


//===ALL===PLANS---SWIPER---START===//

var swiper = new Swiper(".mySwiper2", {
    loop: true,
    speed: 1200,
    effect: 'fade',
    autoplay: {
        delay: 2000,
        // pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  });
  
  
  //===ALL===PLANS---SWIPER---END===//

//===INTERIORS---SWIPER---START===//

var swiper = new Swiper(".mySwiper3", {
    loop: true,
    speed: 1200,
    effect: 'fade',
    spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
  //   autoplay: {
  //       delay: 2000,
  //       disableOnInteraction: false,  
  //       pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  });
  
  
  //===INTERIORS---SWIPER---END===//




  function sustainableParallax(){
    gsap.registerPlugin(ScrollTrigger);
     
    const createParallax = () => {
      // Only create parallax effect for screens wider than 480px
      if (window.innerWidth > 480) {
        const scale = 1.05;
        const yOffset = "20%";

        gsap.fromTo(".parallax-bg", 
          {
            y: `-${yOffset}`,
            scale: 1
          },
          {
            y: yOffset,
            scale: scale,
            ease: "none",
            scrollTrigger: {
              trigger: ".parallax-container",
              start: "top bottom", 
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true
            }
        });
      }
    }
    // Initial creation
    createParallax();
  }
  sustainableParallax()

  function aboutParallax(){
    gsap.registerPlugin(ScrollTrigger);
     
    const createParallax = () => {
      // Only create parallax effect for screens wider than 480px
      if (window.innerWidth > 480) {
        const scale = 1.05;
        const yOffset = "20%";

        gsap.fromTo(".parallax-bg2", 
          {
            y: `-${yOffset}`,
            scale: 1
          },
          {
            y: yOffset,
            scale: scale,
            ease: "none",
            scrollTrigger: {
              trigger: ".parallax-container2",
              start: "top bottom", 
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true
            }
        });
      }
    }
    // Initial creation
    createParallax();
  }
  aboutParallax()

  function allPlansBanner() {
    const allPlansBanner = document.querySelector('.all_plans_banner');
  
    gsap.fromTo(
      allPlansBanner,
      {
        opacity: 0,
        scale: 0.7,
        rotation: 15,
        y: 100,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 2,
        ease: 'expo.out', 
        backgroundColor: "#ffcc00",
        scrollTrigger: {
          scroller: 'body',
          trigger: allPlansBanner,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 3,
          // markers: true,
        },
      }
    );
  }
  
  allPlansBanner();
  
  function overviewTxt(){
    const overviewTxt = document.querySelectorAll('.overview_text');
    
    overviewTxt.forEach(text => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
  overviewTxt();
  
  function animateDiv(){
    const animateDiv = document.querySelectorAll('#animate_div');
    
    animateDiv.forEach(divs => {
      gsap.fromTo(divs, {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: divs,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
  animateDiv();

  function accordion(){
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(content => {
          content.style.maxHeight = null;
          content.style.padding = '0 20px';
        });

        // Open the clicked accordion if not already active
        if (!isActive) {
          header.classList.add('active');
          const content = header.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.padding = '15px 20px';
        }
      });
    });
  }
  accordion();

  // function bannerLogo(){
  //   const bannerLogo = document.querySelectorAll('.banner_logo svg')
  //   gsap.fromTo(bannerLogo,{
  //     opacity: 0,
  //     transform: 'translateY(-50px)',
  //   },
  //   {
  //     opacity: 1,
  //     duration: 1,
  //     delay: 4,
  //     transform: 'translateY(0px)',
  //     duration: 2,
  //     ease: 'elastic',
  //     stagger: 0.02
  //   })
  // }
  // bannerLogo();

  function magnetButtonAnimation(){
    const magnetWrap = document.querySelector('.magnet-wrap');
    const magnet = document.querySelector('.magnet');
    const text = magnet.querySelector('span');
  
    magnetWrap.addEventListener('mousemove', (e) => {
      const bounds = magnetWrap.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      
      const moveX = (e.clientX - centerX) * 0.3;
      const moveY = (e.clientY - centerY) * 0.3;
      
      gsap.to(magnet, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out"
      });
  
      gsap.to(text, {
        x: -moveX * 0.4,
        y: -moveY * 0.4,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  
    magnetWrap.addEventListener('mouseleave', () => {
      gsap.to([magnet, text], {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
    
  }
  magnetButtonAnimation()


  function downloadBrochure() {
    const brochureContent = document.querySelectorAll('#download_brochure_content'); 
  
    brochureContent.forEach(tag => {
  
      gsap.set(tag, {
        y: 50,
        opacity: 0
      });
  
      gsap.to(tag, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.01,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tag,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
  
  downloadBrochure();
  
  
  function overlayAnimations(){
    const overlay1 = document.querySelector('.overlay1');
    const overlay2 = document.querySelector('.overlay2');
    const overlay3 = document.querySelectorAll('.overlay3');
    
      gsap.fromTo(overlay1, {
        transform: 'translateX(0%)', 
      }, {
        transform: 'translateX(-100%)',
        duration: 2.5,
        scrollTrigger: {
          scroller: 'body',
          trigger: '.overlay1',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 3,
          // markers: true,
          toggleActions: 'play none none reverse'
        }
      });
    
    gsap.fromTo(overlay2,{
      transform: 'translateX(0%)', 
    },{
      transform: 'translateX(100%)',
      duration: 2.5,
      scrollTrigger : {
        scroller: 'body',
        trigger: '.overlay2',
        start: 'top 70%',
        end: 'top 30%',
        scrub: 3,
        // markers: true,
      }
    })

    
    overlay3.forEach((overlay) => {
      gsap.fromTo(overlay, {
        transform: 'translateX(0%)', 
      }, {
        transform: 'translateX(100%)',
        duration: 2.5,
        scrollTrigger: {
          scroller: 'body',
          trigger: overlay,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 3,
          // markers: true,
          toggleActions: 'play none none reverse'
        }
      });
    });    
    
  }
  overlayAnimations();

  function proximityAnimation(){
    const proximities = document.querySelectorAll('.proximities .proximity_img');
    gsap.to(proximities,{
      opacity: 1,
      transform: 'translateY(0%)',
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        scroller: 'body',
        trigger: '.proximities',
        start: 'top 90%',
        end: 'top 50%',
        // markers: true,
        toggleActions: 'play none none reverse'
      }
    })
  }

  proximityAnimation();


  function galleryAnimation(){
    const gallery = document.querySelectorAll('.gallery_imgs .images');
    gsap.to(gallery,{
      opacity: 1,
      transform: 'translateY(0%)',
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        scroller: 'body',
        trigger: '.images',
        start: 'top 90%',
        end: 'top 50%',
        // markers: true,
        toggleActions: 'play none none reverse'
      }
    })
  }
  galleryAnimation();

  

  function tabs(){
    document.addEventListener('DOMContentLoaded', function() {
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      // Initial animation for first tab
      gsap.to('#tab1', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
      });
  
      function switchTab(tabId) {
          tabBtns.forEach(btn => {
              btn.classList.remove('active');
              btn.style.backgroundColor = '';
              btn.style.color = '';
              btn.style.border = '1px solid var(--green)';
          });
          tabContents.forEach(content => {
              content.classList.remove('active');
              gsap.set(content, { opacity: 0 });
          });
  
      
          const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
          const activeContent = document.getElementById(tabId);
          
          activeBtn.classList.add('active');
          activeContent.classList.add('active');

          if(tabId === 'tab1') {
              activeBtn.style.backgroundColor = 'var(--greentransparent)';
              activeBtn.style.color = 'var(--black)';
              activeBtn.style.border = '1px solid var(--greentransparent)';
          } else if(tabId === 'tab2') {
              activeBtn.style.backgroundColor = 'var(--yellowtransparent)';
              activeBtn.style.color = 'var(--black)';
              activeBtn.style.border = '1px solid var(--yellowtransparent)';
          } else if(tabId === 'tab3') {
              activeBtn.style.backgroundColor = 'var(--redtransparent)';
              activeBtn.style.color = 'var(--black)';
              activeBtn.style.border = '1px solid var(--redtransparent)';
          }
  
          gsap.fromTo(activeContent,
              { 
                  opacity: 0,
                  y: 20
              },
              {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: 'power2.out'
              }
          );
      }
  
      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const tabId = btn.getAttribute('data-tab');
              switchTab(tabId);
          });
      });

      // Set initial green color for first tab
      // const firstTab = document.querySelector('[data-tab="tab1"]');
      // firstTab.style.backgroundColor = 'var(--green)';
      // firstTab.style.color = 'var(--white)';
  });
   }
   tabs();

   function contactForm(){
    // Form validation
  const form = document.getElementById('contactForm');
  const inputs = document.querySelectorAll('.form-input');

  const validateInput = (input) => {
      const errorElement = document.getElementById(`${input.id}Error`);
      let isValid = true;

      // Reset styles
      input.classList.remove('error');
      errorElement.style.display = 'none';

      // Validation rules
      if (input.required && !input.value.trim()) {
          isValid = false;
          errorElement.textContent = 'This field is required';
      } else if (input.type === 'email' && !validateEmail(input.value)) {
          isValid = false;
          errorElement.textContent = 'Please enter a valid email address';
      } else if (input.pattern && !new RegExp(input.pattern).test(input.value)) {
          isValid = false;
      } else if (input.id === 'message') {
          if (input.value.length < 10) {
              isValid = false;
              errorElement.textContent = 'Message must be at least 10 characters long';
          }
      }

      if (!isValid) {
          input.classList.add('error');
          errorElement.style.display = 'block';
      }

      return isValid;
  };

  const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Input animations and validation
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          if (!input.classList.contains('error')) {
              gsap.to(input, {
                  borderColor: 'var(--white)',
                  duration: 0.3
              });
          }
      });

      input.addEventListener('blur', () => {
          validateInput(input);
          if (!input.value && !input.classList.contains('error')) {
              gsap.to(input, {
                  borderColor: '#eee',
                  duration: 0.3
              });
          }
      });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;

      inputs.forEach(input => {
          if (!validateInput(input)) {
              isFormValid = false;
          }
      });

      if (isFormValid) {
          // Here you would typically send the form data to your server
          console.log('Form submitted successfully');
          form.reset();
      }
  });

   }
   contactForm();

  function fancyBox(){
    Fancybox.bind('[data-fancybox="gallery"]', {
      groupAll : true,
      animated: true,
      showClass: fancybox-fadeIn,
      hideClass: false,
       caption: function (fancybox, carousel, slide) {
        return (
          `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
        );
      },
      Image: {
        Panzoom: {
          zoomFriction: 0.7,
          maxScale: function () {
            return 5;
          },
        },
      },
      Thumbs: {
        Carousel: {
          Sync: {
            friction: 0.9,
          },
        },
      },
    
      click: false,
    
      dragToClose: true,
    
      Toolbar: {
        display: [{ id: "counter", position: "center" },
           "close"],
      },
    })
  }
  fancyBox()