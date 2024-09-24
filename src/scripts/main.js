//==================  Handle the length of post caption ==================
const postContainers = document.querySelectorAll(".about-post");
postContainers.forEach((container) => {
  const caption = container.querySelector(".post-caption");
  const seeMoreCaption = container.querySelector(".seemore-caption");

  let text = caption.textContent.trim();
  let splitText = text.split("");
  let maxLength = getMaxLength();

  let splitWord = text.split(" ");

  let isLonger = true;

  if (splitText.length > maxLength) {
    let firstText = splitText.slice(0, maxLength);
    let lasText = splitText.slice(maxLength);

    caption.textContent = firstText.join("") + "...";
    seeMoreCaption.classList.add("display-block");

    seeMoreCaption.addEventListener("click", () => {
      caption.textContent = `${firstText.join("")}${lasText.join("")}`;
      seeMoreCaption.classList.remove("display-block");

      findHastag(splitWord);

      isLonger = false;
    });
  } else {
    findHastag(splitWord);
  }

  //Function to find and highlight the hashtags
  function findHastag(text) {
    let target = "#";
    let hashElem = [];
    let notHashElem = [];

    for (let i = 0; i < text.length; i++) {
      let currentElem = text[i];

      if (currentElem.startsWith(target)) {
        hashElem.push(currentElem);
      } else {
        notHashElem.push(currentElem);
      }
    }

    //Clear the existing content of the caption element
    caption.innerHTML = notHashElem.join(" ");

    hashElem.forEach((word) => {
      //Create a span for the hashtag
      let hashSpan = document.createElement("span");
      hashSpan.textContent = word + " ";
      hashSpan.style.color = "#1877f2";
      hashSpan.style.fontWeight = "600";

      //Append the span to the caption element
      caption.appendChild(hashSpan);
    });
  }
});

//Function to check the user's screen width
function getMaxLength() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    return 140;
  } else if (screenWidth <= 768) {
    return 320;
  } else if (screenWidth <= 1024) {
    return 450;
  } else {
    return 500;
  }
}

//==================  Handle the reaction button ==================
const newsfeedContainer = document.querySelectorAll(".newsfeed-post");
newsfeedContainer.forEach((container, index) => {
  const likeBtn = container.querySelector(
    ".post-actions-buttons .action-buttons .button-product .button-list .button-item .fa-thumbs-up"
  );

  const reaction = container.querySelector(
    ".post-actions-buttons .react-comment .reaction-area .reaction a"
  );

  let reactionCount = parseInt(
    localStorage.getItem(`reactionCount${index}`),
    10
  );

  if (isNaN(reactionCount)) {
    reactionCount = parseInt(reaction.textContent, 10);
  }

  reaction.textContent = reactionCount.toString();

  // Function to increment the reaction count
  function reactIncrement(btn) {
    btn.addEventListener(
      "click",
      () => {
        reactionCount++;
        reaction.textContent = reactionCount.toString();

        localStorage.setItem(`reactionCount${index}`, reactionCount);
      },
      300
    );
  }

  reactIncrement(likeBtn);

  const commentBtn = container.querySelector(
    ".post-actions-buttons .action-buttons .button-product .button-list .comment"
  );
  const commentArea = container.querySelector(".comment-area");
});
// ================== BUTTONS Toggle==================
const menuBtn = document.getElementById("menu-btn"),
  menuArea = document.getElementById("menu-area"),
  chatBtn = document.getElementById("chat-btn"),
  chatArea = document.getElementById("chat-area"),
  notifBtn = document.getElementById("notification-btn"),
  notifArea = document.getElementById("notification-area"),
  icons = document.querySelectorAll(".second-nav .nav-product .nav-item i");

let clickCount = 0;

function handleButtonClick(
  btn,
  activeArea,
  inactiveArea1,
  inactiveArea2,
  activeIcon,
  inactiveIcon1,
  inactiveIcon2
) {
  btn.addEventListener("click", () => {
    activeArea.classList.toggle("show-menu-area");
    inactiveArea1.classList.remove("show-menu-area");
    inactiveArea2.classList.remove("show-menu-area");
    activeIcon.classList.toggle("active-color");
    inactiveIcon1.classList.remove("active-color");
    inactiveIcon2.classList.remove("active-color");

    if (activeIcon.classList.contains("active-color")) {
      btn.addEventListener("mouseover", () => {
        activeIcon.classList.add("hover-effect");
      });

      btn.addEventListener("mouseout", () => {
        activeIcon.classList.remove("hover-effect");
      });
    } else if (!activeIcon.classList.contains("active-color")) {
      btn.removeEventListener("mouseover", () => {});

      btn.removeEventListener("mousesout", () => {});
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (
    menuBtn &&
    menuArea &&
    chatBtn &&
    chatArea &&
    notifBtn &&
    notifArea &&
    icons.length >= 3
  ) {
    handleButtonClick(
      menuBtn,
      menuArea,
      chatArea,
      notifArea,
      icons[0],
      icons[1],
      icons[2]
    );
    handleButtonClick(
      chatBtn,
      chatArea,
      menuArea,
      notifArea,
      icons[1],
      icons[0],
      icons[2]
    );
    handleButtonClick(
      notifBtn,
      notifArea,
      menuArea,
      chatArea,
      icons[2],
      icons[0],
      icons[1]
    );
  }
});

const accountBtn = document.getElementById("account-btn"),
  accountArea = document.getElementById("account-area");

document.addEventListener("DOMContentLoaded", () => {
  accountBtn.addEventListener("click", () => {
    accountArea.classList.toggle("show-menu-area");
  });
});

// =============  FRIEND REQUEST AREA =============
document.addEventListener("DOMContentLoaded", () => {
  const frBtn = document.getElementById("fr-btn"),
    frArea = document.getElementById("friendrequest-area");

  if (frBtn) {
    frBtn.addEventListener("click", () => {
      frArea.classList.toggle("display-block");
    });
  }
});

const chatButton = document.getElementById("chat-button");
if (chatButton) {
  chatButton.addEventListener("click", () => {
    chatArea.classList.toggle("display-block");
  });
}

// ============= MOBILE SEARCH =============
const recentSearch = document.getElementById("magnifying-glass"),
  searchArea = document.getElementById("search-area"),
  searchBack = document.getElementById("search-back-btn");

if (recentSearch && searchArea && searchBack) {
  recentSearch.addEventListener("click", () => {
    searchArea.classList.add("display-block");
  });

  searchBack.addEventListener("click", () => {
    searchArea.classList.remove("display-block");
  });
}

// ============= LARGER DEVICE SEARCH =============
const searchLarger = document.querySelector(
  ".logo-search-section .fa-magnifying-glass"
);

if (searchLarger) {
  searchLarger.addEventListener("click", () => {
    searchArea.classList.add("display-block");
  });
}

// ============= SEARCH AREA FILTER =============
const searchInput = document.querySelector(".searchh");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll(".search-content-list");

    listItems.forEach((item) => {
      const userName = item
        .querySelector(".users-details strong")
        .textContent.toLowerCase();

      displayBlockNone(userName, searchValue, item);
    });
  });
}

// ============= SEARCH AREA FILTER (messenger)=============
const searchMessenger = document.getElementById("messenger-search");

if (searchMessenger) {
  searchMessenger.addEventListener("input", () => {
    const searchValue = searchMessenger.value.toLowerCase();
    const listItems = document.querySelectorAll(".online-friend-list");

    listItems.forEach((item) => {
      const userName = item
        .querySelector(".friend-details strong")
        .textContent.toLowerCase();

      displayBlockNone(userName, searchValue, item);
    });
  });
}

//Function for filtering the list items
function displayBlockNone(username, searchvalue, item) {
  if (username.includes(searchvalue)) {
    item.style.display = "";
  } else {
    item.style.display = "none";
  }
}
