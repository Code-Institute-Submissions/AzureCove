/*Navbar colour change script*/
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 640) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});
/*Typing script*/
$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["housewives,", "students,", "junior developers,"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true, // Default value
  });
});
