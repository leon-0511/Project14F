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
