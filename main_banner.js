let images = document.querySelectorAll('.main_banner img');
images[0].style.display = 'block';


let imageIndex = 0;

function changeImage(direction) {
  imageIndex = (imageIndex + direction + images.length) % images.length;
  images.forEach(img => (img.style.display = 'none'));
  images[imageIndex].style.display = 'block';
}

function nextImage() {
  changeImage(1);
}

function prevImage() {
  changeImage(-1);
}

setInterval(nextImage, 2000);

// Add event listeners to the buttons
document.querySelectorAll('.nexticondark').forEach(function(e) {
  e.addEventListener('click', nextImage);
});

document.querySelectorAll('.previcondark').forEach(function(e) {
  e.addEventListener('click', prevImage);
});

/*
1st humne banner images ko access kiya in javascript.
then starting main vo 1st image dikhayega..

fir humne ek variable liya ..jiski starting value 0 hai.

fir hmne ek function create kiya jismain ek parameter direction create kiya and usko function ke andar hi define kiya taaki uski value call kr skein...

fir humne ye expression likha:

imageIndex = (imageIndex + direction + images.length) % images.length;

Case 1: Initial State

imageIndex = 0

images.length = 3

(0 + 1 + 3) % 3 = 4 % 3 = 1

The result is 1, indicating the next image (index 1).
Case 2: Second Image Displayed

imageIndex = 1

(1 + 1 + 3) % 3 = 5 % 3 = 2

The result is 2, indicating the next image (index 2).
Case 3: Third Image Displayed

imageIndex = 2

(2 + 1 + 3) % 3 = 6 % 3 = 0

The result is 0, indicating the next image (index 0).
Conclusion:

When direction = 1, the expression effectively cycles through the images in a forward direction. It starts with the first image (index 0), then moves to the second (index 1), and finally the third (index 2). Once the last image is reached, the modulo operation wraps the result back to 0, ensuring that the cycle continues seamlessly.


fir humne ye likha

images.forEach(img => (img.style.display = 'none'));

humne images lgaya starting main to access

The line images.forEach(img => (img.style.display = 'none')); iterates through all the images in the images array and sets their display style to 'none', effectively hiding them.

sare elements /images hide krne ke baad
 images[imageIndex].style.display = 'block';

 it means image vohi dikhe jiska index chal raha ho



*/




/*let currentImageIndex = 0;
let images = document.querySelectorAll('.main_banner img');

function nextImage() {
  // Hide the current image by setting its display style to 'none'
  images[currentImageIndex].style.display = 'none';
  
  // Increment the currentImageIndex to move to the next image
  currentImageIndex++;
  
  // Check if we've reached the end of the image array
  if (currentImageIndex >= images.length) {
    // If we have, wrap around to the beginning of the array by setting currentImageIndex to 0
    currentImageIndex = 0;
  }
  
  // Show the new current image by setting its display style to 'block'
  images[currentImageIndex].style.display = 'block';
}

function prevImage() {
  // Hide the current image by setting its display style to 'none'
  images[currentImageIndex].style.display = 'none';

  // Decrement the currentImageIndex to move to the previous image
  currentImageIndex--;

  // Check if we've reached the beginning of the image array
  if (currentImageIndex < 0) {
    // If we have, wrap around to the end of the array by setting currentImageIndex to the last index
    currentImageIndex = images.length - 1;
  }
  
  // Show the new current image by setting its display style to 'block'
  images[currentImageIndex].style.display = 'block';
}

setInterval(nextImage, 2000);

// Add event listeners to the buttons
document.querySelectorAll('.nexticondark').forEach(function(btn) {
  btn.addEventListener('click', nextImage);
});

document.querySelectorAll('.previcondark').forEach(function(btn) {
  btn.addEventListener('click', prevImage);
});*/