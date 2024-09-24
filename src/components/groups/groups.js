const mobileNav = document.getElementById("mobile-nav"),
  mobileNavArea = document.querySelector(".mobile-navbar"),
  groupsContent = document.querySelector(".groups-main-content");

import { mobileNavShow } from "../mobile-navbar/mobile.js";

if (mobileNav && mobileNavArea && groupsContent) {
  mobileNavShow(mobileNav, mobileNavArea, groupsContent);
}
