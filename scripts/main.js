"use strict";


// DOM Element Selection
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuClose = document.getElementById("close-button");
const preLoader = document.querySelector(".preload-container");
const sections = document.querySelectorAll(".section");
const servicesItem = document.querySelectorAll(".services-item");
const servicesContents = document.querySelector(".services-contents");
const servicesMoreButton = document.querySelector(".services-more");
const aElement = document.querySelectorAll("a");

// PreLoader
window.addEventListener("load", function(){
    this.setTimeout(function(){
        if (preLoader) preLoader.classList.add("preload-hidden");
    }, 2000);
    this.setTimeout(function(){
        if (preLoader) preLoader.remove();
    }, 3000);
});


// Mobile Menu Handler
const mobileMenuShow = function() {
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("hidden");
    if (mobileMenuContainer) mobileMenuContainer.style.left = "0px";
};
const mobileMenuHidden = function() {
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add("hidden");
    if (mobileMenuContainer) mobileMenuContainer.style.left = "-320px";
};
if (mobileMenuToggle) mobileMenuToggle.addEventListener("click", mobileMenuShow);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener("click", mobileMenuHidden);
if (mobileMenuClose) mobileMenuClose.addEventListener("click", mobileMenuHidden);


// SwiperJS
const swiperTestimonial = new Swiper('.swiper-1', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperBlogPost = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperCustomerReviews = new Swiper('.swiper-customer-reviews', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    effect: 'slide',
    speed: 600,
    width: null,
    allowTouchMove: true,
    centeredSlides: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
            width: null,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: null,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: null,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: null,
        },
    },
    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
    },
    pagination: {
        el: '.reviews-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});


// Services Fade Animation
if (servicesItem.length > 0) {
    servicesItem.forEach(function(item, i, arr){
        item.addEventListener("mouseenter", function(){
            arr.forEach(function(item){
                item.style.opacity = "0.5";
            });
            item.style.opacity = "1";
            if (servicesContents) servicesContents.style.opacity = "0.5";
            if (servicesMoreButton) servicesMoreButton.style.opacity = "0.5";
        });
    });

    servicesItem.forEach(function(item, i, arr){
        item.addEventListener("mouseleave", function(){
            arr.forEach(function(item){
                item.style.opacity = "1";
            });
            if (servicesContents) servicesContents.style.opacity = "1";
            if (servicesMoreButton) servicesMoreButton.style.opacity = "1";
        });
    });
}


// Section fade in Animation
sections.forEach(function(param) {
    param.classList.add("section-fade");
});
const sectionEffectCallback = function(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove("section-fade");
        sectionEffect.unobserve(entry.target);
    };
};
const sectionEffect = new IntersectionObserver(sectionEffectCallback, {
    root: null,
    threshold: 0,
});
sections.forEach(function(param) {
    sectionEffect.observe(param);
});


// WhatsApp Contact Form Handler - Ensure DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById("contactForm");
    console.log(contactForm, "contactForm"); // For debugging purposes
    
    if (contactForm) {
        console.log("Contact form found, attaching event listener"); // Debug log
        
        contactForm.addEventListener("submit", function(e) {
            console.log("Form submission intercepted"); // Debug log
            e.preventDefault();
            e.stopPropagation();
            
            const nameInput = document.getElementById("name");
            const messageInput = document.getElementById("message");
            
            const name = nameInput.value.trim();
            const message = messageInput.value.trim();
            
            console.log("Form data:", { name, message }); // Debug log
            
            if (name && message) {
                // Format the WhatsApp message
                const whatsappMessage = `Hello! My name is ${name}.%0A%0AMessage: ${message}%0A%0AThank you!`;
                
                // WhatsApp number (using the clinic's number)
                const whatsappNumber = "60143442294";
                
                // Create WhatsApp URL
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
                
                console.log("Opening WhatsApp URL:", whatsappURL); // For debugging purposes
                
                // Try opening WhatsApp using window.open first, then fallback to location change
                try {
                    window.open(whatsappURL, '_blank');
                } catch (error) {
                    console.log("window.open failed, using location.href", error);
                    // Fallback to location.href if window.open fails
                    window.location.href = whatsappURL;
                }
                
                // Clear the form after successful submission
                nameInput.value = "";
                messageInput.value = "";
            } else {
                alert("Please fill in both name and message fields.");
            }
            
            // Ensure the form doesn't submit normally
            return false;
        });
    } else {
        console.error("Contact form not found!");
    }
});

// Smooth scroll functionality for anchor links
function smoothScrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

 // <a> Element PreventDefault (but allow anchor links to work)
aElement.forEach(function(item){
    item.addEventListener("click", function(e){
        const href = item.getAttribute('href');
        // If it's an anchor link (starts with #), handle smooth scroll
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1); // Remove the # symbol
            smoothScrollToSection(targetId);
        }
        // Allow default behavior for other links (tel:, mailto:, external URLs)
    });
});

const navLink = document.getElementById('nav-link');
if (navLink) {
  navLink.addEventListener('click', e => {
    e.preventDefault();

    const lat = 1.5672702, lng = 103.6124648;
    const label = encodeURIComponent('Klinik Pergigian Razz');

    // deep-link URLs
    const schemes = [
      // Waze
      `waze://?ll=${lat},${lng}&navigate=yes`,
      // Google Maps on Android/iOS
      `comgooglemaps://?q=${lat},${lng}(${label})`,
      // Apple Maps on iOS
      `maps://?q=${label}&ll=${lat},${lng}`,
      // geo: fallback on Android
      `geo:${lat},${lng}?q=${lat},${lng}(${label})`
    ];

    // final browser fallback
    const webUrl = `https://www.google.com/maps/place/${label}/@${lat},${lng},17z`;

    // try each scheme in sequence, fallback after short delay
    (function tryScheme(i) {
      if (i >= schemes.length) {
        window.open(webUrl, '_blank');
        return;
      }
      // attempt to open native app
      window.location = schemes[i];
      // if after 500ms nothing happened, try next
      setTimeout(() => tryScheme(i + 1), 500);
    })(0);
  });
}

  const isMobile = () =>
    /android|iphone|ipad|ipod/i.test(navigator.userAgent || "");

  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const fallback = link.dataset.fallback;

      if (isMobile()) {
        // Try the native app...
        window.location = link.href;
        // ...then after a short pause, drop back to web
        setTimeout(() => {
          window.open(fallback, '_blank');
        }, 500);
      } else {
        // Desktop / non-mobile: just open web directly
        window.open(fallback, '_blank');
      }
    });
  });


   const tiktokLink = document.getElementById('tiktok-link');
  const fallbackUrl = 'https://www.tiktok.com/@razzdental';

  if (tiktokLink) {
    tiktokLink.addEventListener('click', e => {
      e.preventDefault();
      const ua = navigator.userAgent;

      let url;
      if (/Android/i.test(ua)) {
        // Use Android Intent URI: opens app if installed, else fallback to browser
        url = 
          'intent://www.tiktok.com/@razzdental'
          + '#Intent;package=com.zhiliaoapp.musically;'
          + 'scheme=https;'
          + 'S.browser_fallback_url='
          + encodeURIComponent(fallbackUrl)
          + ';end';
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        // Standard iOS scheme
        url = 'tiktok://user?username=razzdental';
      } else {
        // Desktop or unknown — just open the web page
        window.open(fallbackUrl, '_blank');
        return;
      }

      // Try to open the app...
      window.location = url;

      // ...and if after 500ms the app didn't handle it, fall back to web
      setTimeout(() => {
        window.open(fallbackUrl, '_blank');
      }, 500);
    });
  }
