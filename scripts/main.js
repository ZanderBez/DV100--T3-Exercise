 // -----------------------------------------------------------------------------------------------
 //   Plant Array
 // -----------------------------------------------------------------------------------------------

    const arrPlants = [
        {
            name: "Ficus Tree",
            price: 350,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant1.png",
            lightAmount: "low",
            addedDate: "2023-03-25"
        },
        {
            name: "White Sprite Succulent",
            price: 200,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant2.png",
            lightAmount: "bright",
            addedDate: "2023-02-01"
        },
        {
            name: "Snake plant",
            price: 400,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant3.png",
            lightAmount: "low",
            addedDate: "2023-01-22"
        },
        {
            name: "Parlour Plant",
            price: 350,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant4.png",
            lightAmount: "bright",
            addedDate: "2023-05-26"
        },
        {
            name: "Japanese Maple",
            price: 1200,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos eos, optio ab ullam accusantium impedit consequatur fuga dignissimos asperiores repellendus expedita harum ipsa ipsum reiciendis dicta doloribus ea vitae",
            image: "plant5.png",
            lightAmount: "low",
            addedDate: "2023-06-04"
        }
    ];

    let appliedFilter ="";
    let appliedSort ="date added";

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
    filterSortPlants();

});

// -----------------------------------------------------------------------------------------------
// Load all Plants
 // -----------------------------------------------------------------------------------------------

 function loadPlants(plantsToShow) {

    console.log(arrPlants);

    // Clear all the elements in plantContainer
    $("#plantContainer").empty();

    // loop through plants

    for (let i = 0; i < plantsToShow.length; i++) {
        const plant = plantsToShow [i];

        console.log(plant);

        // 1:Select the plant container and add the current array plant to it
        $("#plantContainer").append($("#plantCardTemplate").html());

        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantContainer").children().eq(i)

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

$("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter)
    filterSortPlants();
});

$("input[name='sortRadio']").click(function(){
    appliedSort = $(this).attr('value');

    console.log(appliedSort)
    filterSortPlants();
});

function filterSortPlants() {

    let filterSortedArrPlants = [];

    // Filter plants

    if (appliedFilter){
        filterSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter)
    } else{
        filterSortedArrPlants = arrPlants;
    }

// Sort Plants

    if (appliedSort == "low to High"){

        // Sort the plants from lowest to highest
        filterSortedArrPlants = filterSortedArrPlants.sort((a,b) => {
            return a.price - b.price;
        });

    } else if (appliedSort == "date added") {

        // sort plants from the newest to oldest
        filterSortedArrPlants = filterSortedArrPlants.sort((a,b) => {
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db -da;
        });
    }

    loadPlants(filterSortedArrPlants);


}

 // -----------------------------------------------------------------------------------------------
// When the plant cards is clicked
$("#plantContainer").on('click','.card', function(){

    // toggle the price and description text
    $(this).find("#descriptionText").toggle();
    $(this).find("#priceText").toggle();
    

    // Resize the plant image to fit additional content
    $(this).find(".card-img-top").toggleClass("small");


})