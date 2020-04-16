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
