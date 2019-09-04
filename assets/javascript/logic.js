// Global Functions and Variables...........................

var searchResult;

// List of starter buttons
var buttonsList = [
  "cat",
  "fail",
  "spongebob",
  "sadako",
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

// Prints all Gifs to screen
function renderGifs() {
  for (var i = 0; i < searchResult.data.length; i++) {
    var image = $("<img>");
    image.addClass("image");
    image.attr("src", searchResult.data[i].images.fixed_height_small_still.url);
    image.attr("value", searchResult.data[i].images.fixed_height_small.url);
    $("#gif-container").prepend(image);
  }
  activateGif();
}

// Attaches on-click listeners with api search functions to each of the rendered buttons
function activateButtons() {
  $(".buttons").on("click", function() {
    // API Search request:
    var query = $(this).text();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=ix9jT2sQ84XR1V2YYWEUZxeTGBq42VeM&q=" +
      query +
      "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      searchResult = response;
      renderGifs();
    });
  });
}

// Animates the Gifs
function activateGif() {
  $(".image").on("click", function() {
    var temp1 = $(this).attr("src");
    var temp2 = $(this).attr("value");
    $(this).attr("src", temp2);
    $(this).attr("value", temp1);
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
