//==================  SEE MORE AND SEE LESS SIDEBAR LEFT ==================
const moreList = document.querySelectorAll(".see-more-list");
const seeMoreBtn = document.getElementById("see-more-btn"),
  seeLessBtn = document.getElementById("see-less-btn");

document.addEventListener("DOMContentLoaded", () => {
  seeMoreBtn.addEventListener("click", () => {
    moreList.forEach((e) => {
      e.classList.add("display-block");
    });

    seeMoreBtn.classList.add("display-none");
  });

  seeLessBtn.addEventListener("click", () => {
    moreList.forEach((e) => {
      e.classList.remove("display-block");
    });

    seeMoreBtn.classList.remove("display-none");
  });
});
