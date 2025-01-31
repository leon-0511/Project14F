// Content for each page (same as before)
const pageContent = [
  {
      left: {
          title: "Page 1",
          text: "This is the first page. Click to turn the page and see more!"
      },
      right: {
          title: "Page 2",
          text: "This is the second page. Click to turn the page and see more!"
      }
  },
  {
      left: {
          title: "Page 3",
          text: "This is the third page, with more content. Keep clicking to turn the page!"
      },
      right: {
          title: "Page 4",
          text: "This is the fourth page. You're getting closer to the end!"
      }
  },
  {
      left: {
          title: "Page 5",
          text: "Page 5: More pages ahead, with tons of cool content!"
      },
      right: {
          title: "Page 6",
          text: "Page 6: Almost there! You've been turning pages like a pro!"
      }
  }
];

// Select the pages in the DOM
const leftPage = document.getElementById("page1");
const rightPage = document.getElementById("page2");

// Current page index (starts with 0, so the first pair is page 1 and page 2)
let currentPageIndex = 0;

function changePageContent() {
  const content = pageContent[currentPageIndex];

  // Get the page content containers for both pages
  const leftPageContent = leftPage.querySelector(".page-content");
  const rightPageContent = rightPage.querySelector(".page-content");

  // Step 1: Ensure opacity is set to 0 (hidden) before changing the content
  // leftPageContent.style.opacity = 0;
  // rightPageContent.style.opacity = 0;

  // Step 2: Update the content immediately
  leftPage.querySelector(".page-content h1").textContent = content.left.title;
  leftPage.querySelector(".page-content p").textContent = content.left.text;

  rightPage.querySelector(".page-content h1").textContent = content.right.title;
  rightPage.querySelector(".page-content p").textContent = content.right.text;

  // Step 3: Wait for the DOM update and trigger fade-in by adding the 'visible' class
  setTimeout(() => {
    leftPageContent.classList.add('visible');
    rightPageContent.classList.add('visible');
  }, 10); // Small delay to ensure content is updated before applying 'visible' class
}



// Function to turn the page forward (right page)
function turnPageForward() {
  if (currentPageIndex < pageContent.length - 1) {
      // Change content first
      currentPageIndex++;

      // Add flip effect only to the right page (forward)
      rightPage.classList.add("flip-to-center-forward");
      setTimeout(() => {
          leftPage.classList.add("hidden");
      }, 300);
      // Wait for the animation to finish (1 second) before removing the flip effect
      setTimeout(() => {
          rightPage.classList.remove("flip-to-center-forward");
          leftPage.classList.remove("hidden");
          changePageContent();
      }, 700);
  } else {
      alert("You've reached the last page!");
  }
}

// Function to turn the page backward (left page)
function turnPageBackward() {
  if (currentPageIndex > 0) {
      // Change content first
      currentPageIndex--;

      // Add flip effect only to the left page (backward)
      leftPage.classList.add("flip-to-center-backward");
      
      setTimeout(() => {
          rightPage.classList.add("hidden");
      }, 300);
      // Wait for the animation to finish (1 second) before removing the flip effect
      setTimeout(() => {
          leftPage.classList.remove("flip-to-center-backward");
          rightPage.classList.remove("hidden");
          changePageContent();
      }, 700);
      
  } else {
      alert("You're already at the first page!");
  }
}

// Initialize the content on the first page pair
changePageContent();

// Add event listeners to trigger page turning
rightPage.addEventListener('click', turnPageForward);
leftPage.addEventListener('click', turnPageBackward);
