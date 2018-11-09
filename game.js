//Dessert Buttons Array
var topics = [
    "cupcakes",
    "cookies",
    "pies",
    "cheesecake",
    "truffles",
    "ice cream",
    "candy",
    "custard",
    "brownies",
    "donuts",
    "chocolate",
    "tarts",
    "shortcake",
    "fudge",
    "cookie dough",
    "tiramisu",
    "tres leche",
];

var dessertBtn;

//Print desesrt buttons on screen
function makeButtons() {
    $("#buttons-box").empty();
    for (var i = 0; i < topics.length; i++) {
        dessertBtn = $("<button>");
        dessertBtn.addClass("dessert-Btn");
        dessertBtn.attr("dessert", topics[i]);
        dessertBtn.text(topics[i]);
        $("#buttons-box").append(dessertBtn);
        console.log(dessertBtn.val());
    };
};

makeButtons();

//This doesn't work and I need help. Googling it is making it worse :(
$(".dessert-Btn").on("click", function () {
    var dessertType = dessertBtn.val("dessert");
    console.log(dessertType);
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + dessertType + "&api_key=RrgnVfF8sDxOG3Iv4nhJznF4ReLow0wk&limit=5");
    xhr.done(function(data) { console.log("success got data", data); });
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var imageUrl = response.data.image_original_url;
            var dessertImage = $("<img>");
            dessertImage.addClass("gif");
            dessertImage.attr("src", imageUrl);
            dessertImage.attr("alt", "dessert image");
            $("#gifs-box").prepend(dessertImage);
        });
});

//This is copy and pasted from the in-class pausing activity, 
//but it won't work yet because I haven't given the gifs two separate urls.
$("img").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === 'still') {
      console.log('Yay!');
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", 'animating');
      
    } else if (state === 'animating') {
      console.log('Nay!!');
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", 'still');
    }
  });

var userInput;
//This is my nonfunctioning form. I also need help getting this to work.
$("submit").on('click', function() {
    userInput = $("#dessert-form").val();
    console.log(userInput);
    topics.push(userInput);
    makeButtons();
})
