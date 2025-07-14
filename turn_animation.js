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
* File: turn_animation.js
* Date: 31/01/2025
* 
* #######################################################################
*/

// Content for each page (same as before)
const pageContent = [
  {
      left: {
          title: "A Gift",
          text: "It is a very special day, and special days warrant for special things, like a good gift. Now, what makes a good gift?\
                Some would say it's something expensive, like a new car, a piece of jewelry, maybe a box of fancy chocolates. Others would\
                answer that it should be something that they could enjoy, use, or look at often, something that makes them feel like you matter\
                to them. I say no answer is mistaken, but, to me, the best kind of gift, is the one that comes from the soul, the one that has\
                effort, love, care, and emotion put into it, and so, i've tried to achieve this through this gift. Initially a Saint Valentine's gift\
                i sadly couldn't finish, but, i didn't forget it, i was waiting for the time i could turn my full attention to it, and the time is now,\
                the moment to find A Gift, for the most important person in my world.\n\n",
                
          text: "And what could possibly meet such great standards? Well, virtually anything, but i've decided on making something, with a litle bit of\
                personality, a little bit of me, that you can enjoy. This gift comes in the format of a treasure hunt, you are going to have to complete\
                some (simple) quests, to discover 3 words which will complete the link needed to reach the actual gift."
          
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
