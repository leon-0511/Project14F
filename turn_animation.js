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
                the moment to find A Gift, for the most important person in my world.\n\n\
                \
                And what could possibly meet such great standards? Well, virtually anything, but i've decided on making something, with a litle bit of\
                personality, a little bit of me, that you can enjoy. This gift comes in the format of a treasure hunt, you are going to have to complete\
                some (simple) quests, to discover 3 words which will complete the link needed to reach the actual gift.\n\n\
                \
                At the time of writing this part i haven't made them, but these three quests are a Cypher, a Snake game (Snookie) and a Trivia, they'll be explained in the next\
                pages. Hope you have fun mwehehehehe >:3."
          
      },
      right: {
          title: "The Cypher Quest",
          text: "This one is pretty simple, just a warmup, i will give you a code in binary, and you gotta decypher it (translate it) to get the first word you need\
                but there's a twist, because otherswise it would be a simple google search. The code is in reverse.\n\n\
                This is the binary code:\n10111101 10001010 10010001 10010001 10000110\n\n\
                \
                To decypher this code, you will have to first invert the ones and zeroes (swap ones for zeroes and zeroes for ones), and then use an online binary to text converter, i'll leave you a link to one below:\n",
          link: "https://www.rapidtables.com/convert/number/binary-to-ascii.html",
          linktext: "Binary to Text translator."
      }
  },
  {
      left: {
          title: "The Snookie Quest",
          text: "Your second quest, a simple snake game >:3. You gotta reach 69 score to find out the next word. The link is here: ",
          link: "https://leon-0511.github.io/Project14F/snake/snake.html",
          linktext: "Snookie"
      },
      right: {
          title: "The Pookie Trivia",
          text: "This is the last quest, a series of questions (a trivia) you gotta get correctly so you can get the last word needed to complete the link.\n\
                Now, i was thinking about what i could make these questions of, because making them about me feels a little egocentric, but making them about you\
                is a little stupid since you'd know the answers easily, so i decided to make them about us, about the things we do together like games and such, hope you enjoy it >:3.\n",
          link: "https://onlinegdb.com/xBq8G-Vy8",
          linktext: "The Trivia"
      }
  },
  {
      left: {
          title: "The End",
          text: "If you are reading this page, you should already know the three words needed to complete the link, now, how do you complete the link? Well, you add them to the end of this:\
           https://leon-0511.github.io/Project14F/\n\
           For example, if the three words were 'cat', 'dog' and 'sheep', the link would be https://leon-0511.github.io/Project14F/catdogsheep.html. Make sure to add the html at the end"
      },
      right: {
      }
  }
];

// Select the pages in the DOM
const leftPage = document.getElementById("page1");
const item = pageContent[0];
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

  if (content.left.link) {
    const linkElement = document.createElement("a");
    linkElement.href = content.left.link;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    linkElement.textContent = content.left.linktext;
    leftPage.querySelector(".page-content p").appendChild(document.createElement("br"));
    leftPage.querySelector(".page-content p").appendChild(linkElement);
  }

  rightPage.querySelector(".page-content h1").textContent = content.right.title;
  rightPage.querySelector(".page-content p").textContent = content.right.text;
  // If a link is present, add it

  if (content.right.link) {
    const linkElement = document.createElement("a");
    linkElement.href = content.right.link;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    linkElement.textContent = content.right.linktext;
    rightPage.querySelector(".page-content p").appendChild(document.createElement("br"));
    rightPage.querySelector(".page-content p").appendChild(linkElement);
  }

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
