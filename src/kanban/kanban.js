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
const createNewListBut = document.querySelector(".createList");
const mainContainer = document.querySelector(".main_container");
let currentIndex = 0;

let arrObjList = [];

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

const newListItem = (text, title, currentIndex) => {
  const sectionMainItems = document.createElement("div");
  sectionMainItems.classList.add("main_section_main_items");
  sectionMainItems.innerText = text;
  const localObj = {
    numString: currentIndex,
    titleList: title,
    textList: text,
    obj: sectionMainItems,
  };

  if (text == "Login page – performance issues") {
    return sectionMainItems;
  }
  if (text == "Shop page – performance issues") {
    return sectionMainItems;
  }
  if (text == "User page – performance issues") {
    return sectionMainItems;
  }
  if (text == "Main page – performance issues") {
    return sectionMainItems;
  }
  arrObjList.push(localObj);
  return sectionMainItems;
};

const addMainDivList = () => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main_div");
  mainDiv.classList.add(`main_div${currentIndex}`);

  currentIndex += 1;
  mainDiv.append(createNewList("Backlog", "Login page – performance issues"));
  mainDiv.append(createNewList("Ready", "Shop page – performance issues"));
  mainDiv.append(
    createNewList("In Progress", "User page – performance issues")
  );
  mainDiv.append(createNewList("Finished", "Main page – performance issues"));

  return mainDiv;
};

createNewListBut.addEventListener("click", () => {
  mainContainer.append(addMainDivList());
});

const newUlList = (text) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("addList");

  const liList = document.createElement("li");
  liList.classList.add("ulListLi");
  liList.append(text);
  ulList.append(liList);
  return ulList;
};

const createNewList = (title, text) => {
  const mainSection = document.createElement("div");
  mainSection.classList.add(
    "main_section",
    title.toLowerCase().replace(/\s/g, "")
  );

  const mainSectionHeader = document.createElement("div");
  mainSectionHeader.classList.add("main_section_header");
  mainSection.append(mainSectionHeader);

  const mainHeaderTitle = document.createElement("span");
  mainHeaderTitle.classList.add("main_header_title");
  mainHeaderTitle.innerText = title;
  mainSectionHeader.append(mainHeaderTitle);

  const mainSectionSetting = document.createElement("div");
  mainSectionSetting.classList.add("main_section_setting");
  mainSectionHeader.append(mainSectionSetting);

  const mainSectionUserPoint = document.createElement("div");
  mainSectionUserPoint.classList.add("main_section_userPoint");
  mainSectionSetting.append(mainSectionUserPoint);

  const sectionMain = document.createElement("div");
  sectionMain.classList.add("main_section_main");
  mainSection.append(sectionMain);

  sectionMain.append(newListItem(text, title, currentIndex));

  const mainSectionFooter = document.createElement("div");
  mainSectionFooter.classList.add("main_section_footer");
  mainSection.append(mainSectionFooter);

  const mainSectionFooterBut = document.createElement("button");
  mainSectionFooterBut.classList.add("main_section_footer_but");

  mainSectionFooter.append(mainSectionFooterBut);

  const mainSectionFooterButSpan = document.createElement("span");
  mainSectionFooterButSpan.classList.add("main_section_footer_but_span");
  mainSectionFooterButSpan.innerText = " + Add list";
  mainSectionFooterBut.append(mainSectionFooterButSpan);

  if (mainSection.classList.contains("backlog")) {
    mainSectionFooterBut.addEventListener("click", () => {
      const newinputList = document.createElement("input");
      newinputList.setAttribute("type", "text");
      newinputList.classList.add("input_list");

      if (mainSectionFooterBut.getAttribute("disabled")) {
        return;
      }

      mainSectionFooterBut.setAttribute("disabled", "disabled");
      newinputList.addEventListener("blur", () => {
        if (newinputList.value.trim() == "") {
          mainSectionFooterBut.removeAttribute("disabled");
          newinputList.remove();
          return;
        }

        sectionMain.append(
          newListItem(newinputList.value, title, currentIndex)
        );

        newinputList.remove();
        mainSectionFooterBut.removeAttribute("disabled");
      });

      mainDivCurrent = document.querySelectorAll(".main_div");
      sectionMain.append(newinputList);
      newinputList.focus();
    });
  }

  if (mainSection.classList.contains("ready")) {
    mainSectionFooterBut.addEventListener("click", () => {
      const backLogElement = mainSectionFooterBut
        .closest(".main_div")
        .querySelectorAll(".backlog .main_section_main_items");

      const divReady = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".ready");

      const divBacklog = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".main_section_main");

      for (let i = 1; i < backLogElement.length; i++) {
        sectionMain.append(newUlList(backLogElement[i]));
        backLogElement[i].addEventListener("click", () => {
          const ulRemove = backLogElement[i].closest(".addList");
          ulRemove.remove();
          sectionMain.append(backLogElement[i]);
        });

        divReady.addEventListener("mouseleave", () => {
          const backListItem = backLogElement[i].closest(".ulListLi");

          const ulRemove = divReady.querySelector(".addList");
          const appendMainItems = backListItem.querySelector(
            ".main_section_main_items"
          );

          divBacklog.append(appendMainItems);
          ulRemove.remove();
        });
      }
    });
  }

  if (mainSection.classList.contains("inprogress")) {
    mainSectionFooterBut.addEventListener("click", () => {
      const backLogElement = mainSectionFooterBut
        .closest(".main_div")
        .querySelectorAll(".ready .main_section_main_items");

      const divReady = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".inprogress");

      const divBacklog = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".ready .main_section_main");

      for (let i = 1; i < backLogElement.length; i++) {
        sectionMain.append(newUlList(backLogElement[i]));
        backLogElement[i].addEventListener("click", () => {
          sectionMain.appendChild(backLogElement[i]);
        });

        divReady.addEventListener("mouseleave", () => {
          const backListItem = backLogElement[i].closest(".ulListLi");
          const ulRemove = divReady.querySelector(".addList");
          const appendMainItems = backListItem.querySelector(
            ".main_section_main_items"
          );

          divBacklog.append(appendMainItems);
          ulRemove.remove();
        });
      }
    });
  }

  if (mainSection.classList.contains("finished")) {
    mainSectionFooterBut.addEventListener("click", () => {
      const backLogElement = mainSectionFooterBut
        .closest(".main_div")
        .querySelectorAll(".inprogress .main_section_main_items");

      const divReady = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".finished");

      const divBacklog = mainSectionFooterBut
        .closest(".main_div")
        .querySelector(".inprogress .main_section_main");

      for (let i = 1; i < backLogElement.length; i++) {
        sectionMain.append(newUlList(backLogElement[i]));
        backLogElement[i].addEventListener("click", () => {
          console.log(sectionMain);
          sectionMain.appendChild(backLogElement[i]);
        });

        divReady.addEventListener("mouseleave", () => {
          const backListItem = backLogElement[i].closest(".ulListLi");
          const ulRemove = divReady.querySelector(".addList");
          const appendMainItems = backListItem.querySelector(
            ".main_section_main_items"
          );

          divBacklog.append(appendMainItems);
          ulRemove.remove();
        });
      }
    });
  }

  return mainSection;
};

mainContainer.append(addMainDivList());
