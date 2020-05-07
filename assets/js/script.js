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
  let contentDiv = document.getElementById("contentcont"),
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
//Array with Cards
const cards = [
  //Fundamentals
  {
    title: "Auzre basics",
    description: "Azure Fundamentals",
    category: "Fundamentals",
    src: "https://www.youtube.com/embed/KXkBZCe699A",
  },
  {
    title: "Auzre features compared ",
    description: "Azure Fundamentals",
    category: "Fundamentals",
    src: "https://www.youtube.com/embed/xCabPpcq8Ac",
  },

  //Infrastructure
  {
    title: "Infrastructure as a Service",
    description: "Azure Infrastructure",
    category: "Infrastructure",
    src: "https://www.youtube.com/embed/Zewl48XUr7w",
  },

  {
    title: "Infrastructure as a Code",
    description: "Azure Infrastructure",
    category: "Infrastructure",
    src: "https://www.youtube.com/embed/G3D14I5_NIk",
  },
  //AI & Data
  {
    title: "What is Azure AI",
    description: "Azure AI & Data",
    category: "ai",
    src: "https://www.youtube.com/embed/RtRJry5-I0g",
  },
  //Internet of things
  {
    title: "Introduction to Azure IoT",
    description: "Azure IoT",
    category: "iot",
    src: "https://www.youtube.com/embed/5ES-1g_mGxY",
  },
  //Security
  {
    title: "Auzre Security Basics",
    description: "Azure Security",
    category: "Security",
    src: "https://www.youtube.com/embed/YskZ3WcK2jM",
  },
  {
    title: "Auzre Security Essentials",
    description: "Azure Security",
    category: "Security",
    src: "https://www.youtube.com/embed/OTGMi0ksjXY",
  },
  //DevOps
  {
    title: "Introduction to Azure DevOps",
    description: "DevOps",
    category: "devops",
    src: "https://www.youtube.com/embed/JhqpF-5E10I",
  },
  //Web & Mobile
  {
    title: "Auzre Web Apps ",
    description: "Azure Web",
    category: "WebMobile",
    src: "https://www.youtube.com/embed/jCfJWYocz1M",
  },
];
function showCards() {
  // Div containing cards with video Tutorials.
  var cards_container = document.getElementById("cards");
  // Remove all current card divs so we can replace with new ones below.
  // If we don't do this the divs we add below will just be added after whatever
  // is already on the page.
  while (cards_container.firstChild) {
    cards_container.removeChild(cards_container.firstChild);
  }

  var selected_category = document.getElementById("category-selector").value;

  for (i = 0; i < cards.length; i++) {
    var current_card = cards[i];

    // The following two variables are boolean values
    // category_correct is equal to true either if the selected option is all
    // or the current Cards category value is the same as that selected.
    var category_correct =
      selected_category == "all" || current_card.category == selected_category;

    // Only show Cards with the correct category
    if (category_correct) {
      var bootcolumn = generate_card_html(current_card);
      cards_container.appendChild(bootcolumn);
    }
  }
}
/* Generate a div for a single card, e.g.
  <div class="col-12 col-md-6 col-lg-3">
      <div class="card">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="320"
            height="220"
            src="https://www.youtube.com/embed/KXkBZCe699A"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="card-body">
          <h5 class="card-title">Title here</h5>
          <p class="card-text">
            Description here...
          </p>
        </div>
      </div>
    </div>
    
  */
function generate_card_html(card) {
  var bootcolumn = document.createElement("div");
  bootcolumn.setAttribute("class", "col-12 col-md-6 col-xl-3"); //
  var card_div = document.createElement("div");
  card_div.setAttribute("class", "card"); // Give div class="card"
  var embed_div = document.createElement("div");
  embed_div.setAttribute("class", "embed-responsive embed-responsive-16by9"); // add responsive embed.
  var iframe = document.createElement("iframe"); // add iframe parameters
  iframe.width = "320";
  iframe.height = "220";
  iframe.src = card.src;
  iframe.frameborder = "0";
  iframe.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowfullscreen;
  var card_body = document.createElement("div");
  card_body.setAttribute("class", "card-body");
  var header = document.createElement("h5");
  header.setAttribute("class", "card-title");
  header.innerHTML = card.title;
  var description = document.createElement("p");
  description.setAttribute("class", "card-text");
  description.innerHTML = card.description;

  bootcolumn.appendChild(card_div);
  card_div.appendChild(embed_div);
  embed_div.appendChild(iframe);
  card_div.appendChild(card_body);
  card_body.appendChild(header);
  card_body.appendChild(description);

  return bootcolumn;
}
showCards();
