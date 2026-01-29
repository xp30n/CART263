// when the page loads, this is basically calling a function without a name - useful for if you want a specifc function to happen when the page loads
window.onload = function(){ 
    console.log("move");

    document.querySelector("#draw-box-a").addEventListener("mousemove", mouseMoveFunction);
    
    // get bounding box of draw box a
    let rect = document.querySelector("#draw-box-a").getBoundingClientRect(); 

    let pointDiv = document.createElement("div")
    pointDiv.classList.add("point");
    document.querySelector("#draw-box-a").appendChild(pointDiv);

    function mouseMoveFunction(eventObj) {
        console.log("Are you sure?") // "Guess who finally got his powers? (˵ ¬ᴗ¬˵)"
        console.log(eventObj); // <-- this shows the information relating to the event and it can tell you where the x and y is of the mouse 
        // this.innerHTML = `x: ${eventObj.clientX}, y:${eventObj.clientY}`; <-- this displays the x and y coordinates within the box

        // DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = eventObj.clientX-rect.x;
        let offsetY = eventObj.clientX-rect.y;

        // this.innerHTML = 
        // `x: ${offsetX}, y: ${offsetY}`;
        pointDiv.style.top = `${offsetY} px`;
        pointDiv.style.left = `${offsetX} px`;
    } 
    // ^^ this block of code is basically registering when the mouse is moved within the drawn box on the page !! 
}