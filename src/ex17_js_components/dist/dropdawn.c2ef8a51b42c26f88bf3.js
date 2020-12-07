/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************************!*
  !*** ./src/dropdawn/dropdawn.js ***!
  \**********************************/
eval("const header2 = document.querySelector('.header2');\r\nconst newDiv = document.createElement('div');\r\nconst newElementTagUl = document.createElement('ul');\r\nconst dropDawn = document.querySelector('.header2 .header2_arrow_settings');\r\nconst blockLogo = document.querySelector('.blockLogo');\r\nconst arrow = document.querySelector('.arrow');\r\n\r\nnewDiv.className = 'header2_arrow_settings';\r\n\r\nnewDiv.append(newElementTagUl);\r\n\r\nfunction newElementTagA(num) {\r\n  const element = document.createElement('a');\r\n\r\n  switch (num) {\r\n    case 1:\r\n      element.innerText = 'My account';\r\n      break;\r\n\r\n    case 2:\r\n      element.innerText = 'My tasks';\r\n      break;\r\n\r\n    case 3:\r\n      element.innerText = 'My out';\r\n      break;\r\n\r\n    default:\r\n      return element;\r\n  }\r\n\r\n  element.setAttribute('href', '#');\r\n\r\n  return element;\r\n}\r\n\r\nfunction newElementTagLi(num) {\r\n  const elem = document.createElement('li');\r\n\r\n  elem.append(newElementTagA(num));\r\n\r\n  return elem;\r\n}\r\n\r\nnewElementTagUl.append(newElementTagLi(1));\r\nnewElementTagUl.append(newElementTagLi(2));\r\nnewElementTagUl.append(newElementTagLi(3));\r\n\r\narrow.dataset.activeArrow = 'false';\r\n\r\nblockLogo.addEventListener('click', () => {\r\n  if (arrow.dataset.activeArrow === 'false') {\r\n    arrow.dataset.activeArrow = 'true';\r\n    header2.append(newDiv);\r\n    arrow.style.transform = 'rotate(135deg)';\r\n  } else {\r\n    arrow.dataset.activeArrow = 'false';\r\n    newDiv.remove();\r\n    arrow.style.transform = 'rotate(-45deg)';\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://kanban/./src/dropdawn/dropdawn.js?");
/******/ })()
;