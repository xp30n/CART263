window.onload = setup;

function setup() {
    console.log("events!")

    let introSection = document.querySelector("#intro");

    let s1 = document.querySelector("#s1");

    // to allow this specific section to become clickable - no need for collision detection !
    introSection.addEventListener("click", mouseClickCallback); 
    
    // the mouseClickCallback is a function that we are creating - Make sure not to add the parentheses after calling the function, because then it would run automatically and not only during the event! 

    s1.addEventListener("click", mouseClickS1);

    function mouseClickCallback() {
        console.log("Prepare for my arrival worm");
    }
    
    function mouseClickS1() {
        console.log("CECIL !! ")
    }

}