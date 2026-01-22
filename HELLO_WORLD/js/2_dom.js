window.onload = setup;

function setup() {
    console.log("running setup");
    // let second_element = document.getElementById("two");
    // let second_again = document.querySelector("#two")
    // console.log(second_element);
    // console.log(second_again);

    // let elements = document.getElementsByTagName("div");
    // // console.log(elements[elements.length-1]);

    // for (let i = 0; i < elements; i++) {
    //     console.log(elements[i])
    // }

    // let firstDiv = document.querySelector("div"); //Query selector is used to get ANY item, as long as you specify its ID or CLASS
    // let allDivs = document.querySelectorAll("div");
    
    // console.log(allDivs);

    // let elementsWithClass = document.getElementsByClassName("square_shape");
    // // let allElementswithClass = document.querySelectorAll(".square_shape");
    // let firstEl = document.querySelector(".square_shape");
    // let htmlOfEl = firstEl.innerHTML;

    // let idOfFive = document.querySelector(".square_shape").getAttribute("id"); // This is asking the DOM to retrieve the id of the attribute of the class "square_shape" !! 
    // console.log(idOfFive);

    // let el = document.querySelector("#two").getAttribute("square_shape another_class");
    // console.log(el);

    let parentOfOne = document.querySelector("#one").parentElement; // gets the parent element within the id of one - it can continue until you finally reach the top of the html script
    console.log(parentOfOne);

    let childrenOfFlex = document.querySelector(".wrapper_flex_box").children;
    console.log(childrenOfFlex);

    // for (let i = 0; i < childrenOfFlex; i++) {
    //     console.log(childrenOfFlex[i]) // this is accessing the first set of children
    //     for (let j = onabort; j < childrenOfFlex[i].childeren.length; j++) { // then this is accessing that first sets list of children (complicated damn.....)

    //     }
    // }

    document.querySelector("#four").innerHTML = "<h3> A new H3 </h3>"
}


