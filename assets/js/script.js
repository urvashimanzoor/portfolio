"use strict";

{
  /* <div class="main-background">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
        </div> */
}

const $ = {
  repeatBg: () => {
    const mainBackground = document.createElement("div");
    mainBackground.classList.add("main-background");

    const line1 = document.createElement("div");
    line1.classList.add("line", "line-1");

    const line2 = document.createElement("div");
    line2.classList.add("line", "line-2");

    mainBackground.appendChild(line1);
    mainBackground.appendChild(line2);

    const mainBackgroundWrapper = document.getElementById(
      "main-background-wrapper"
    );
    mainBackgroundWrapper.appendChild(mainBackground);
  },
};

for (let i = 0; i < 2000; i++) {
  $.repeatBg();
}
