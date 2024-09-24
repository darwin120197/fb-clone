const videoContainer = document.querySelectorAll(".posted-videos");
videoContainer.forEach((container) => {
  const video = container.querySelector(".video");
  const playBUtton = container.querySelector(".video-container i");

  playBUtton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.paused();
    }
  });

  video.addEventListener("play", () => {
    playBUtton.style.display = "none";
  });

  video.addEventListener("pause", () => {
    playBUtton.style.display = "block";
  });
});

const mobileNav = document.getElementById("mobile-nav"),
  mobileNavArea = document.querySelector(".mobile-navbar"),
  videoContent = document.querySelector(".v-main-content");

import { mobileNavShow } from "../mobile-navbar/mobile.js";

if (mobileNav && mobileNavArea && videoContent) {
  mobileNavShow(mobileNav, mobileNavArea, videoContent);
}
