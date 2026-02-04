window.onload = function(){
    console.log("keys");

    // ! This is a timeout function, in which something will happen after a set amount of time
    window.setTimeout(function(e) {
        let parent = document.querySelector("#parent");
        parent.textContent += "NEW TEXT"
    }, 2000);

    // ! The setInterval function continuously runs after every two seconds (as indicated in the code) whereas the setTimeout function only runs once
    window.setInterval(function(e) {
        let parent = document.querySelector("#parent");
        parent.textContent += " NEW TEXT FOR INTERVAL"
    }, 2000);

    
    
    
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", keyHandlerUp);

    let speedX = 5; 

    // ! This how is you would handle key pressed events 
    function keyHandler(event) {
        if (event.key === "ArrowRight") {
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) + speedX + "px";

        } if (event.key === "ArrowLeft") {
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) - speedX + "px";

        } if (event.key === " ") {
            document.querySelector("#boxB").style.background = "blue";
        }

        //else {
           // console.log(event.keyCode);
          // document.querySelector("#textContainer").textContent += `${event.key} `; 
       // }
    }

    // Handles the keyup function, similar to keydown
    function keyHandlerUp() {
        if (event.key === " ") {
            document.querySelector("#boxB").style.background = "red";
        }
    }
}

