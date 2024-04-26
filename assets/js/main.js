


$(function () {
  "use strict";

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Sidebar

  $('[href="#side-menu-left"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").addClass("open");
  });

  $('[href="#close"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").removeClass("open");
  });

  //===== Slick

  $(".slider-items-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //===== Isotope Project 4

  $(".container").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      // options
      transitionDuration: "1s",
    });

    // filter items on button click
    $(".portfolio-menu ul").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });

    //for menu active class
    $(".portfolio-menu ul li").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  //===== slick Testimonial Four

  $(".testimonial-active").slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
  });

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====

  $(".show-more").click(function () {
    if ($("#text").hasClass("show-more-height")) {
      $(this).text("PRIKAŽI MANJE");
    } else {
      $(this).text("PRIKAŽI VIŠE");
    }

    $("#text").toggleClass("show-more-height");
  });
});




/*POPUP*/
function generateHTML() {
  return `<div class="popup-box"">

  <h3 class="title-popup">POKLANJAMO</h3>

<ul>
  <h4 class="popup-heading-one">
    <i>Od uloga do pobjede</i>
  </h4>
  <h4 class="popup-heading-two">
  <i>Osvoji mjesto na tribinama Evropskog prvenstva 2024!</i>
</h4>

  <div class="list-rules">
    <i class="fa-solid fa-check"></i>
    <li>
    1. mjesto – paket aranžman za odlazak na EURO 2024
    </li>
  </div>
  <div class="list-rules">
    <i class="fa-solid fa-check"></i>
    <li>
    2. mjesto -  paket aranžman za odlazak na EURO 2024
    </li>
  </div>
  <div class="list-rules">
  <i class="fa-solid fa-check"></i>
  <li>
  3. mjesto – 500€ bonusa i 500 spinova na igri Zombie Apocalypse 
  </li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
4. mjesto – 400€ bonusa i 400 spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
5. mjesto – 300€ bonusa i 300 spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
6. mjesto - 200€ bonusa i 200  spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
7 – 10. mjesto – 150€ bonusa i 150 spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
11 – 20. mjesto - 100€ bonusa i 100 spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
21 - 40. mjesto - 50€ bonusa i 50 spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
41 - 60. mjesto - 40€ bonusa i spinova na igri Zombie Apocalypse
</li>
</div>
<div class="list-rules">
<i class="fa-solid fa-check"></i>
<li>
61 - 70. mjesto - 20€ bonusa i spinova na igri Zombie Apocalypse
</li>
</div>
<h4 class="popup-heading-three">
<i>Budi dio ekskluzivne petorke koji će biti svjedoci nezaboravnog spektakla na EURO 2024!</i>
</h4>
  </ul>
  </div>`;
}
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.querySelector(".popup-active");
  const popupContent = document.querySelector(".popup-content-active");

  document.querySelector(".main-btn").addEventListener("click", function (event) {
    event.preventDefault();

    if (popup.classList.contains("show")) {
      return;
    }

    popup.style.display = "block";
    popupContent.style.display = "flex";

    let contentHTML = generateHTML(); // pozivanje funkcije generateHTML
    popupContent.innerHTML = contentHTML;

    var closeBtn = document.createElement("img");
    closeBtn.id = "close-btn";
    closeBtn.src = "assets/images/x.svg"; 
    popupContent.appendChild(closeBtn);

    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation();

      setTimeout(function() {
        popup.style.display = "none";
      }, 300);

      setTimeout(function() {
        popup.classList.remove("show");
        popupContent.classList.remove("show");
      }, 10);
    });

    setTimeout(function() {
      popup.classList.add("show");
      popupContent.classList.add("show");
    }, 10);
  });

  popup.addEventListener("click", function () {
    setTimeout(function() {
      popup.style.display = "none";
    }, 300);

    setTimeout(function() {
      popup.classList.remove("show");
      popupContent.classList.remove("show");
    }, 10);
  });

  popupContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
