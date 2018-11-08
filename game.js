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

for (var i = 0; i < topics.length; i++) {
    var dessertBtn = $("<button>");
    dessertBtn.addClass("dessert-Btn");
    dessertBtn.text(topics[i]);
    $("#buttons-box").append(dessertBtn);
}
