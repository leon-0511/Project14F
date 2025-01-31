/*        ,gggg,     ,ggggggg,    _,gggggg,_      ,ggg, ,ggggggg,
*       d8" "8I   ,dP""""""Y8b ,d8P""d8P"Y8b,   dP""Y8,8P"""""Y8b
*       88  ,dP   d8'    a  Y8,d8'   Y8   "8b,dPYb, `8dP'     `88
*    8888888P"    88     "Y8P'd8'    `Ybaaad88P' `"  88'       88
*       88        `8baaaa     8P       `""""Y8       88        88
*       88       ,d8P""""     8b            d8       88        88
*  ,aa,_88       d8"          Y8,          ,8P       88        88
* dP" "88P       Y8,          `Y8,        ,8P'       88        88
* Yb,_,d88b,,_   `Yba,,_____,  `Y8b,,__,,d8P'        88        Y8,
*  "Y8P"  "Y88888  `"Y8888888    `"Y8888P"'          88        `Y8
* 
* #######################################################################
*
* File: book_animation.js
* Date: 31/01/2025
* 
* #######################################################################
*/

// Create an array of page images (page001.png to page041.png)
const pageImages = [];
for (let i = 1; i <= 12; i++) {
    const formattedIndex = String(i).padStart(3, '0'); // Ensure it's 3 digits: page001.png
    pageImages.push(`book_animation/tile${formattedIndex}.png`);
}

let currentPage = 0; // Start from the first page (page001.png)
let isAnimating = false; // Flag to check if the animation is already running

// Reference to the image element
const bookImage = document.getElementById('book-id');
const bookContainer = document.getElementById('book');

// Function to simulate the book opening animation by switching pages
function openBook() {
  if (isAnimating) return; // Prevent starting multiple animations at once

  isAnimating = true; // Set the flag to true to prevent re-triggering the animation

  // Set an interval to change the image every 200ms (adjust for speed)
  const animationInterval = setInterval(() => {
    if (currentPage < pageImages.length - 1) {
      currentPage++;
      bookImage.src = pageImages[currentPage]; // Change to the next page image
    } else {
      // End the animation once the last page is reached
      clearInterval(animationInterval);
      scaleUpBook();
    }
  }, 40); // Change the image every 100 milliseconds (you can adjust the speed)
}

function scaleUpBook() {
  // Add the scale-up class to trigger the scaling animation
  bookContainer.classList.add('scale-up');
  
  bookContainer.addEventListener('transitionend', () => {
    // Once the scaling animation ends, redirect to a new page
    window.location.href = "newpage.html"; // Replace with the URL of the page you want to redirect to
});
}

// Add an event listener to trigger the book opening when clicked
document.getElementById('book').addEventListener('click', openBook);
