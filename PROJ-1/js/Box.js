window.onload = function () {
  let layout = {
    background: {
      div: document.createElement("div"),
      image: document.createElement("img"),
    },
    box: {
      el: document.createElement("img"),
    },
    grid: {
      el: document.createElement("img"),
    },

    lights: {
      el: document.createElement("img"),
      offSrc: "/images/light-on.png",
      onSrc: "/images/light-on.png",
    },
    dispenser: {
      el: document.createElement("img"),
    },
    heart: {
      el: document.createElement("img"),
    },
    button: {
      el: document.createElement("img"),
    },
    character: {
      el: document.createElement("img"),
    },
  };

  // Add to DOM
  function renderlayout() {
    // bg
    layout.background.div.classList.add("layout");
    layout.background.image.src = "images/background.png";
    layout.background.div.appendChild(layout.background.image);
    document.getElementsByTagName("main")[0].appendChild(layout.background.div);
    //box
    layout.box.el.src = "images/box.png";
    document.querySelector(".layout").appendChild(layout.box.el);
    //electric grid
    layout.grid.el.src = "images/electric-grid.png";
    document.querySelector(".layout").appendChild(layout.grid.el);

    // light off
    layout.lights.el.src = "images/light-off.png";
    document.querySelector(".layout").appendChild(layout.lights.el);

    //dispenser
    layout.dispenser.el.src = "images/dispenser.png";
    document.querySelector(".layout").appendChild(layout.dispenser.el);
    //heart
    layout.heart.el.src = "images/heart.png";
    document.querySelector(".layout").appendChild(layout.heart.el);
    //button
    layout.button.el.src = "images/button-unpressed.png";
    document.querySelector(".layout").appendChild(layout.button.el);
    //character
    layout.character.el.src = "images/character-sit.png";
    document.querySelector(".layout").appendChild(layout.character.el);
  }
  renderlayout();
};
