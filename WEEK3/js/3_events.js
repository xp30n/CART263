window.onload = setup;

function setup() {
  console.log("events!");
  let introState = "off";
  let s1State = "off";

  // let introSection = document.querySelector("#intro");

  // // to allow this specific section to become clickable - no need for collision detection !
  // introSection.addEventListener("click", mouseClickCallback);

  // the mouseClickCallback is a function that we are creating - Make sure not to add the parentheses after calling the function, because then it would run automatically and not only during the event!

  // let s1 = document.querySelector("#s1");
  // s1.addEventListener("click", mouseClickS1);

  // let s2 = document.querySelector("#s2");
  // s2.addEventListener("click", mouseClickS1);

  // this block of code is basically repeating the same functions that we have above for ALL the secions, instead of repeating the functions over and over again. It's just a for loop.
  let allSections = document.querySelectorAll(".mouseclick-active-section");
  for (let currentSection of allSections) {
    currentSection.addEventListener("click", mouseClickCallback);
  }

  function mouseClickCallback(eventObj) {
    console.log("PREPARE FOR MY ARRIVAL WORM.");
    console.log(this); // this specific line of code tells you exactly which element was clicked !!
    console.log(eventObj);

    let idOfThis = this.getAttribute.id; // This is basically saying to get the ID of the variable then logging it in the console
    // console.log(document.querySelector(`#${idOfThis} p` )) // you need to use `` in order for this line of code to work
    // `#${idOfThis} p` // this line is basically getting the value out of this p element

    // this.style.background = "royalblue"; // you can also use "this" to easily access the specifc section

    // you can also do console.log(eventObj) and place "eventObj" in the parameters section, which basically tells you all the information of the specific event. Can be useful

    // you can also use "target" in place of "this" which will only target one specifc element based on the mouse position, and not the entire section

    if (this.getAttribute("custom-bool") === "inactive") {
      let child = document.querySelector(`#${idOfThis} p`); // this is getting the child of the parent
      let classToAdd = `#${idOfThis}-section-active`;
      this.classList.add(classToAdd);
      let classToAddP = `#${idOfThis}-section-p-active`;
    //   child.classList.add(classToAddP);
      console.log(this.getAttribute("custom-bool"));
      this.setAttribute("custom-bool", "active");
    } else {
      let child = document.querySelector(`#${idOfThis} p`); // this is getting the child of the parent
      let classToAdd = `#${idOfThis}-section-active`;
      this.classList.remove(classToAdd);
      let classToAddP = `#${idOfThis}-section-p-active`;
    //   child.classList.remove(classToAddP);
      console.log(this.getAttribute("custom-bool"));
      this.setAttribute("custom-bool", "active");
      this.setAttribute("custom-bool", "inactive");

      //this block of code basically sets the elements with the "inactive" class to "active", and otherwise removes the "active" status !! 
    }
  }

  //     function mouseClickS1() {
  //         console.log("CECIL! I NEED YOU ! ")
  //         console.log(this);
  //     }
}
