 // -----------------------------------------------------------------------------------------------
 //   Plant Array
 // -----------------------------------------------------------------------------------------------
 
    const arrPlants = [
        {
            name: "Ficus Tree",
            price: 350,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
        
        
            name: "White Sprite Succulent",
            price: 350,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
        
        
            name: "Ficus Tree",
            price: 350,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
        
        
            name: "Ficus Tree",
            price: 1200,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
          
         
            name: "Ficus Tree",
            price: 1200,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
        }
    ]

 // -----------------------------------------------------------------------------------------------
//when the document loads
 // -----------------------------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------------------------------------------------------------
    // Home Page


    $(".hero-image").animate({top: '-=100px'})

    // -----------------------------------------------------------------------------------------------
    // Browse Page
    loadPlants();

});

// -----------------------------------------------------------------------------------------------
// Load all Plants
 // -----------------------------------------------------------------------------------------------

 function loadPlants() {

    console.log(arrPlants);

    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants [i];

        console.log(plant);

        // 1:Select the plant container and add the current array plant to it
        $("#plantContainer").append($("#plantCardTemplate").html());

        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantContainer").children().eq(i+1)

        // 3: set the content for the current plant card from the plants array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', 'assets/' + plant.image);

        // 4: Hide the description text from the current card item
        $(currentChild).find("#descriptionText").hide();

    }

 };

//  When te remove button is clicked

$(".minus").click(function(){
    $("#remove").hide();
})
$(".minus1").click(function(){
    $("#remove1").hide();
})
$(".minus2").click(function(){
    $("#remove2").hide();
})



 // -----------------------------------------------------------------------------------------------
// When the plant cards is clicked
 // -----------------------------------------------------------------------------------------------
$("#plantContainer").on('click','.card', function(){

    // toggle the price and description text
    $(this).find("#descriptionText").toggle();
    $(this).find("#priceText").toggle();
    

    // Resize the plant image to fit additional content
    $(this).find(".card-img-top").toggleClass("small");


})