// ============= MOBILE NAVBAR =============
const mobileNav = document.getElementById("mobile-nav"),
  mobileNavArea = document.querySelector(".mobile-navbar");

if (mobileNav && mobileNavArea) {
  mobileNavShow(mobileNav, mobileNavArea, window);
}

export function mobileNavShow(button, container, win) {
  button.addEventListener("click", () => {
    container.classList.add("display-block");
  });

  win.addEventListener("scroll", () => {
    container.classList.remove("display-block");
  });
}

const seeMoreButton = document.getElementById("seemore-button");
const seeLessButton = document.getElementById("seeless-button");
const mobileMoreList = document.querySelectorAll(".mobile-more-list");

if (seeMoreButton && seeLessButton && mobileMoreList) {
  seeMoreButton.addEventListener("click", () => {
    mobileMoreList.forEach((e) => {
      e.classList.add("display-block");
    });

    seeMoreButton.classList.add("display-none");
    seeLessButton.classList.add("display-block");
  });

  seeLessButton.addEventListener("click", () => {
    mobileMoreList.forEach((e) => {
      e.classList.remove("display-block");
    });
    seeLessButton.classList.remove("display-block");
    seeMoreButton.classList.remove("display-none");
  });
}
