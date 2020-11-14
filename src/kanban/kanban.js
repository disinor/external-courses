const header2 = document.querySelector(".header2");
const newDiv = document.createElement("div");
const newUl = document.createElement("ul");
const newLi1 = document.createElement("li");
const newLi2 = document.createElement("li");
const newLi3 = document.createElement("li");
const newA1 = document.createElement("a");
const newA2 = document.createElement("a");
const newA3 = document.createElement("a");
const dropDawn = document.querySelector(".header2 .header2_arrow_settings");
const blockLogo = document.querySelector(".blockLogo");
const arrow = document.querySelector(".arrow");

newDiv.className = "header2_arrow_settings";
newDiv.append(newUl);

newUl.append(newLi1);
newLi1.append(newA1);
newA1.innerText = "My account";

newUl.append(newLi2);
newLi2.append(newA2);
newA2.innerText = "My tasks";

newUl.append(newLi3);
newLi3.append(newA3);
newA3.innerText = "Log out.";

arrow.dataset.activeArrow = "false";

blockLogo.addEventListener("click", () => {
  if (arrow.dataset.activeArrow == "false") {
    arrow.dataset.activeArrow = "true";
    header2.append(newDiv);
    arrow.style.transform = "rotate(-224.5deg)";
  } else {
    arrow.dataset.activeArrow = "false";
    newDiv.remove();
    arrow.style.transform = "rotate(-45deg)";
  }
});


