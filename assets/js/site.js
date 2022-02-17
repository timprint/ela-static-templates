"use strict";

// ==========================================================
// toggle class on body with nav toggle button

function navToggle() {
  var bodyEl = document.querySelector("body");
  var navTrigger = document.querySelector(".headerNavToggle a");
  navTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    bodyEl.classList.toggle("m_navOpen");
  });
}

document.addEventListener("DOMContentLoaded", navToggle);
