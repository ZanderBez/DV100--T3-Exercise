//when the document loads
$(document).ready(function(){

    console.log("hello");

    // -----------------------------------------------------------------------------------------------
    // Home Page


    $(".hero-image".animate)({top:'-=100px'})

    // -----------------------------------------------------------------------------------------------
    // Browse Page

    // Hide the description text from the plant card

    $("#descriptionText").hide();

});

// When the plant cards is clicked

$(".card").click(function(){

    // toggle the price and description text
    $("#descriptionText").toggle();


    // Resize the plant image to fit additional content
    $(".card-img-top").toggleClass("small");


})