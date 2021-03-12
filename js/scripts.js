console.log("OK");

// Store Background Classes
const backgrounds = ["bg0", "bg1", "bg2"];

// Get Random Number
var numRand;
var max = 3;
numRand = Math.floor(Math.random() * backgrounds.length);

// // Get element
// let pageBackground = document.querySelector("body");

// // Set class name from stored values
// pageBackground.className = backgrounds[numRand];

// // Use Gallery
// lightGallery(document.getElementById("gallery"));

const gallery = document.querySelector("#gallery");
const video = document.getElementById("video");

lightGallery(gallery, {
  selector: "a",
  mode: "lg-slide-skew-cross",
  download: false
});

lightGallery(document.getElementById("captions"));

// lightGallery(video);
