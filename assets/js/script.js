//Navbar colour change script

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 640) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

//Typing script
$(document).ready(function () {
  var typed = new Typed(".typing", {
    //Words that are being typed by the script.
    strings: ["students,", "junior developers,"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true, // Default value
  });
});
//Wave script
$(document).ready(function () {
  loop();
  function loop() {
    $(".waveBottom").css("left", "0px");
    $(".waveBottom").animate({ left: "-1900px" }, 16000, "linear", function () {
      setTimeout(loop, 450);
    });
  }
});

//subscribe modal
document.getElementById("buttonmod").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

//navigation for the single page app.
// It loads html code from external html files.
// External HTML pages after visited once are then stored.
// Keys correspond to piece identifiers.
// Values are the text content of each loaded external HTML file.
var partialHtmlCache = {};

// HTTP GET request using XMLHttpRequest.
// Fetches the file at the given path, then
// calls the callback with the text content of the file.
function fetchFile(path, callback) {
  // Create a new AJAX request for fetching the partial HTML file.
  var request = new XMLHttpRequest();

  request.onload = function () {
    callback(request.responseText);
  };
  request.open("GET", path);
  request.send(null);
}

// This function implements a simple cache.
function getContent(pieceId, callback) {
  // If the page has been fetched before,
  if (partialHtmlCache[pieceId]) {
    // Pass the previously fetched content to the callback.
    callback(partialHtmlCache[pieceId]);
  } else {
    // If the page has not been fetched before.
    fetchFile(pieceId + ".html", function (content) {
      // Store the fetched content in the cache.
      partialHtmlCache[pieceId] = content;

      // Pass the newly fetched content to the callback.
      callback(content);
    });
  }
}

// Updates the content based on the piece identifier.
function navigate() {
  // Get a reference to the "contentcont" div.
  var contentDiv = document.getElementById("contentcont"),
    // Remove "#" character.
    pieceId = location.hash.substr(1);

  // Change the "contentcont" div innerHTML based on the piece identifier.
  getContent(pieceId, function (content) {
    contentDiv.innerHTML = content;
  });
}

// If no piece identifier is provided,
if (!location.hash) {
  // default to #home.
  location.hash = "#home";
}

// Navigate once to the initial piece identifier.
navigate();

// Navigate whenever the piece identifier value changes.
window.addEventListener("hashchange", navigate);
