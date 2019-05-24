
particlesJS("particles-js", {
    particles: {
      number: {
        value: 380,
        density: {
          enable: true,
          value_area: 4000
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: false
      }
      
    },
    retina_detect: true
  });
  


var h1 = document.getElementById("center-div");
var footer = document.getElementById("footer-elem");
h1.innerText = "Hi,";

var arr = ["Hi,", "I'm Ayush", "Welcome to my website!"];
var dots = ["", ".", "..", "..."];

var contact = document.getElementById("contact-div");
contact.addEventListener("click", function() {
  h1.innerText = "ayush0471@gmail.com";
  h1.style.display = "block";
  h1.style.opacity = 1;
});

function loading() {
  var tick = 0;
  console.log("loading: " + tick);
  var timerFooter = setInterval(function() {
    if (tick > 50) {
      clearInterval(timerFooter);
    }
    footer.innerText = "loading" + dots[tick++ % 4];
  }, 600);
}
loading();

//footer.innerText = "loading..";
var init = 0;

function writer(i) {
  if (i < arr.length) {
    h1.innerText = arr[i];
    unfade(h1, function(result) {
      setTimeout(function() {
        writer(++i);
      }, 1000);
    });
  }
}
writer(init);

var op = 0.01; // initial opacity
function unfade(element, callback) {
  element.style.opacity = 0;
  element.style.display = "block";
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
      setTimeout(function() {
        fade(h1, function cb(value) {
          callback("done");
        });
      }, 1800);
    }
    element.style.opacity = op;
    element.style.filter.opacity = op * 100;
    op += op * 0.1;
  }, 10);
}

function fade(element, callback) {
  var timer = setInterval(function() {
    if (op <= 0.04) {
      clearInterval(timer);
      element.style.display = "none";
      op = 0.01;
      callback("done");
    }
    element.style.opacity = op;
    element.style.filter.opacity = op * 100;
    op -= op * 0.1;
  }, 10);
}
