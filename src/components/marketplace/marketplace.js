const mobileNav = document.getElementById("mobile-nav"),
  mobileNavArea = document.querySelector(".mobile-navbar"),
  marketplaceContent = document.querySelector(".marketplace-main");

import { mobileNavShow } from "../mobile-navbar/mobile.js";

if (mobileNav && mobileNavArea && marketplaceContent) {
  mobileNavShow(mobileNav, mobileNavArea, marketplaceContent);
}
