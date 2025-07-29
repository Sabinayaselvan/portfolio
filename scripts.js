$(document).ready(function () {
  // Sticky navbar on scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up button click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu item click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle navbar menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation for headings
  var typed = new Typed(".typing", {
    strings: [
      "WordPress Developer",
      "Frontend Developer",
      "Flutter Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "WordPress Developer",
      "Frontend Developer",
      "Flutter Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl carousel setup
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

// ✅ WhatsApp Message Handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsapp-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Replace with your WhatsApp number
      const phoneNumber = "916382536495";

      const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

      // Open WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, "_blank");
    });
  }
});
