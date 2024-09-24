const mobileNav = document.getElementById("mobile-nav"),
  mobileNavArea = document.querySelector(".mobile-navbar"),
  gamingContent = document.querySelector(".gaming-main");

import { mobileNavShow } from "../mobile-navbar/mobile.js";

if (mobileNav && mobileNavArea && gamingContent) {
  mobileNavShow(mobileNav, mobileNavArea, gamingContent);
}
