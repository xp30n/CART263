// window.onload = goApp;

// async function goApp(){
// console.log("hello fetch")

// }

window.onload = goFetch;
async function goFetch() {
  try { 
    // This is a mechanism that says "we're going to make an attempt to dot his function"
    let response = await fetch (
        "/files/tests.json",
    );  
    console.log(response);
    // the await is  basically telling js to wait until we fetch the data, then you can work
    let data = await response.json();
    console.log(data);
    // this is the same logic, we are waiting for the JSON response before we load anything else
        // console.log(data);
    displayResults(data);
  } catch (err) { 
    // and if this function does not work, we will be sent a rejection 
    console.log(err);
  }
}

function displayResults(parsedResultJS){
    for (let i=0; i< parsedResultJS.length; i++){
        console.log(parsedResultJS)
        
        //the object
        let donutObj = parsedResultJS[i];
        //container
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("donutItem");
        document.querySelector("#output").appendChild(containerDiv);
     
        let title = document.createElement("h3");
        title.textContent = donutObj.name;
        containerDiv.appendChild(title)

        //access the image
        let donutImage = document.createElement("img");
        donutImage.src = donutObj.image;
        containerDiv.appendChild(donutImage)
     }

}
