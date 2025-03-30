//===============================//
//======= Mobile Nav Code ==========//

let menuOpen = false;

function toggleMenu(val) {
  if(val) {
  }
  else {
    if(!menuOpen) { 
      $('#menu').animate({
        right: 0
      }, 420, 'swing');
    }
    else { 
      $('#menu').animate({
        right: -260
      }, 420, 'swing');
    }
    menuOpen = !menuOpen;
  }
} 
//===============================//
//======= HEADER CODE ==========//
let headerCount = 0;
let header = document.querySelector('header');
let headerTimer = setInterval('swapHeaderImage()', 3000);
let headerImages = [
  'assets/images/HDR1.png', // 0
  'assets/images/HDR2.png',
  'assets/images/HDR6.png',
  'assets/images/HDR7.png',
];

function swapHeaderImage() {
  // set the header background image
  header.setAttribute('style', 'background: url(' +
    headerImages[headerCount] + '); background-size: cover;');
  // increment the headerCount
  headerCount++;
  // check to see if we are out of range
  if(headerCount >= 4) {
    // reset if we are
    headerCount = 0;
  }
}

//===============================//
//======= Thumbnails CODE ==========//
// Select the large image by ID
let largeImage = document.querySelector("#largeImage");

// Select the thumbnails by their position in the DOM
let thumbnail1 = document.querySelector(".thumbnails img:nth-child(1)");
let thumbnail2 = document.querySelector(".thumbnails img:nth-child(2)");
let thumbnail3 = document.querySelector(".thumbnails img:nth-child(3)");
let thumbnail4 = document.querySelector(".thumbnails img:nth-child(4)");

// Set up click events for each thumbnail
thumbnail1.onclick = function() {
  largeImage.src = "assets/images/thumb1.png";
};

thumbnail2.onclick = function() {
  largeImage.src = "assets/images/thumb2.png";
};

thumbnail3.onclick = function() {
  largeImage.src = "assets/images/thumb3.png";
};

thumbnail4.onclick = function() {
  largeImage.src = "assets/images/thumb5.png";
};
