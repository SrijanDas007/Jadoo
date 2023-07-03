const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });

      option.classList.add("active");
    });
  });
});

// for responsiveness



// $( window ).resize(function() {
//     if($(window).width() <=1000) {
//         $('category-card').toggleClass(function() {
//            if ( $( this ).is( ".col-lg-6" ) ) {
//                console.log("class already there good to go");
//            } else {
//               $( this ).addClass("col-lg-6");
//            }
//         }}
//     else{
//            $('category-card').removeClass("col-lg-6");
//     }

// });

// const myQuery = document.getElementsByClassName("category-card")
// const w = window.innerWidth;

// if(w <= 1400){
//     myQuery.classList.add("col-lg-6");
//     myQuery.classList.remove("col-lg-3");
// }

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 1400) {
        $('.firstService').removeClass('col-lg-6');
        $('.firstService').addClass('col-lg-12');
      } else if (ww >= 1400) {
        $('.firstService').removeClass('col-lg-12');
        $('.firstService').addClass('col-lg-6');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

  jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 995) {
          $('.firstService').addClass('serviceInLine');
          $('.firstService').removeClass('col-lg-12');
          $('.temp').addClass('serviceInLine');
         $('.temp').removeClass('category-card');
         $('.temp').removeClass('showhim');
      } else if (ww >= 800 && ww<1400) {
        $('.firstService').removeClass('serviceInLine');
        $('.firstService').addClass('col-lg-12');
        $('.temp').addClass('category-card');
        $('.temp').removeClass('serviceInLine');
        $('.temp').addClass('showhim');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });