/*Navbar colour change script*/
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 640) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
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
/*Wave script*/
$(document).ready(function () {
  loop();
  function loop() {
    $(".waveBottom").css("left", "0px");
    $(".waveBottom").animate({ left: "-1900px" }, 16000, "linear", function () {
      setTimeout(loop, 450);
    });
  }
});
/*subscribe modal script*/
document.getElementById("buttonmod").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
