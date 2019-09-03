// Global Functions and Variables...........................

// List of starter buttons
var buttonsList = [
  "cat",
  "fail",
  "spongebob",
  "parrot",
  "squirrel",
  "1964 addams",
  "super smash bros",
  "undertale",
  "fred and george",
  "lotr"
];

// Print all Buttons to screen
function renderButtons() {
  for (var i = 0; i < buttonsList.length; i++) {
    var button = $("<button>");
    button.addClass("buttons");
    button.text(buttonsList[i]);
    $("#buttons").append(button);
  }
}

// Attaches on-click listeners with api search functions to each of the rendered buttons
function activateButtons() {
  $(".buttons").on("click", function() {
    alert("hello!");
  });
}

// After the DOM loads......................................

// Load all the buttons
renderButtons();
activateButtons();

// Update buttons when a new button is added to the list of buttons
$("#submit").on("click", function() {
  var search = $("#query")
    .val()
    .trim();
  buttonsList.push(search);
  $("#buttons").empty();
  renderButtons();

  activateButtons();
});

// Display 10 gifs related to the clicked button

// COPY PASTA AJAX QUERY

// // Example queryURL for Giphy API
// var queryURL =
//   "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });
