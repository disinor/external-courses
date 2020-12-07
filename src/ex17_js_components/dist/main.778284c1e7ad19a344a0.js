/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/works-tasks/addMainDiv.js":
/*!***************************************!*
  !*** ./src/works-tasks/addMainDiv.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMainDivList\": () => /* binding */ addMainDivList\n/* harmony export */ });\n/* harmony import */ var _createNewList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewList.js */ \"./src/works-tasks/createNewList.js\");\n\r\nconst addMainDivList = () => {\r\n  const mainDiv = document.createElement('div');\r\n\r\n  mainDiv.classList.add('main_div');\r\n  mainDiv.append((0,_createNewList_js__WEBPACK_IMPORTED_MODULE_0__.createNewList)('Backlog'));\r\n  mainDiv.append((0,_createNewList_js__WEBPACK_IMPORTED_MODULE_0__.createNewList)('Ready'));\r\n  mainDiv.append((0,_createNewList_js__WEBPACK_IMPORTED_MODULE_0__.createNewList)('In Progress'));\r\n  mainDiv.append((0,_createNewList_js__WEBPACK_IMPORTED_MODULE_0__.createNewList)('Finished'));\r\n\r\n  return mainDiv;\r\n};\r\n\n\n//# sourceURL=webpack://kanban/./src/works-tasks/addMainDiv.js?");

/***/ }),

/***/ "./src/works-tasks/createNewList.js":
/*!******************************************!*
  !*** ./src/works-tasks/createNewList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewList\": () => /* binding */ createNewList\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/works-tasks/store.js\");\n/* harmony import */ var _newListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newListItem.js */ \"./src/works-tasks/newListItem.js\");\n/* harmony import */ var _transitionList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionList.js */ \"./src/works-tasks/transitionList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst titleToCamelCaseNotation = (selectedRow) => {\r\n  const row = selectedRow;\r\n  let str = [];\r\n\r\n  for (let i = 0; i < row.length; i++) {\r\n    if (row[i] === ' ') {\r\n      continue;\r\n    } else {\r\n      str[i] = row[i];\r\n      str[0] = str[0].toLowerCase();\r\n    }\r\n  }\r\n\r\n  return str.join('');\r\n};\r\n\r\nfunction createNewList(title, text) {\r\n  const mainSection = document.createElement('div');\r\n\r\n  mainSection.classList.add(\r\n    'main_section',\r\n    title.toLowerCase().replace(/\\s/g, '')\r\n  );\r\n\r\n  const mainSectionHeader = document.createElement('div');\r\n  mainSectionHeader.classList.add('main_section_header');\r\n  mainSection.append(mainSectionHeader);\r\n\r\n  const mainHeaderTitle = document.createElement('span');\r\n  mainHeaderTitle.classList.add('main_header_title');\r\n  mainHeaderTitle.innerText = title;\r\n  mainSectionHeader.append(mainHeaderTitle);\r\n\r\n  const mainSectionSetting = document.createElement('div');\r\n  mainSectionSetting.classList.add('main_section_setting');\r\n  mainSectionHeader.append(mainSectionSetting);\r\n\r\n  const mainSectionUserPoint = document.createElement('div');\r\n  mainSectionUserPoint.classList.add('main_section_userPoint');\r\n  mainSectionSetting.append(mainSectionUserPoint);\r\n\r\n  const sectionMain = document.createElement('div');\r\n\r\n  sectionMain.classList.add('main_section_main');\r\n  mainSection.append(sectionMain);\r\n\r\n  const mainSectionFooter = document.createElement('div');\r\n  mainSectionFooter.classList.add('main_section_footer');\r\n  mainSection.append(mainSectionFooter);\r\n\r\n  const mainSectionFooterBut = document.createElement('button');\r\n  mainSectionFooterBut.classList.add('main_section_footer_but');\r\n  mainSectionFooter.append(mainSectionFooterBut);\r\n\r\n  const mainSectionFooterButSpan = document.createElement('span');\r\n  mainSectionFooterButSpan.classList.add('main_section_footer_but_span');\r\n  mainSectionFooterButSpan.innerText = ' + Add card';\r\n\r\n  mainSectionFooterBut.append(mainSectionFooterButSpan);\r\n\r\n  _store_js__WEBPACK_IMPORTED_MODULE_0__.localDataMock[titleToCamelCaseNotation(title)].forEach((element) => {\r\n    sectionMain.append((0,_newListItem_js__WEBPACK_IMPORTED_MODULE_1__.newListItem)(element.name, element.id));\r\n  });\r\n\r\n  if (text !== undefined) {\r\n    sectionMain.append((0,_newListItem_js__WEBPACK_IMPORTED_MODULE_1__.newListItem)(text, title));\r\n  }\r\n\r\n  if (mainSection.classList.contains('backlog')) {\r\n    mainSectionFooterBut.addEventListener('click', () => {\r\n      const storeBacklog = _store_js__WEBPACK_IMPORTED_MODULE_0__.store.getData().backlog;\r\n      const newinputList = document.createElement('input');\r\n      let id = 0;\r\n\r\n      storeBacklog.forEach(() => {\r\n        id = id + 1;\r\n      });\r\n\r\n      newinputList.setAttribute('type', 'text');\r\n      newinputList.classList.add('input_list');\r\n\r\n      if (mainSectionFooterBut.getAttribute('disabled')) {\r\n        return;\r\n      }\r\n\r\n      mainSectionFooterBut.setAttribute('disabled', 'disabled');\r\n\r\n      newinputList.addEventListener('blur', () => {\r\n        if (newinputList.value.trim() === '') {\r\n          mainSectionFooterBut.removeAttribute('disabled');\r\n          newinputList.remove();\r\n\r\n          return;\r\n        }\r\n\r\n        sectionMain.append((0,_newListItem_js__WEBPACK_IMPORTED_MODULE_1__.newListItem)(newinputList.value, id));\r\n        _store_js__WEBPACK_IMPORTED_MODULE_0__.store.add(newinputList.value, id, 'backlog');\r\n        newinputList.remove();\r\n        mainSectionFooterBut.removeAttribute('disabled');\r\n      });\r\n\r\n      sectionMain.append(newinputList);\r\n      newinputList.focus();\r\n    });\r\n  }\r\n\r\n  if (\r\n    mainSection.classList.contains(\r\n      titleToCamelCaseNotation(title).toLowerCase()\r\n    ) &&\r\n    title !== 'Backlog'\r\n  ) {\r\n    let preventBlock = '';\r\n\r\n    switch (titleToCamelCaseNotation(title).toLowerCase()) {\r\n      case 'ready':\r\n        preventBlock = 'backlog';\r\n        break;\r\n\r\n      case 'inprogress':\r\n        preventBlock = 'ready';\r\n        break;\r\n\r\n      case 'finished':\r\n        preventBlock = 'inProgress';\r\n        break;\r\n\r\n      default:\r\n        return mainSection;\r\n    }\r\n\r\n    if (_store_js__WEBPACK_IMPORTED_MODULE_0__.localDataMock[preventBlock].length <= 1) {\r\n      mainSectionFooterBut.setAttribute('disabled', 'disabled');\r\n    } else {\r\n      mainSectionFooterBut.removeAttribute('disabled');\r\n    }\r\n\r\n    mainSectionFooterBut.addEventListener('click', () => {\r\n      (0,_transitionList_js__WEBPACK_IMPORTED_MODULE_2__.transitionToTheList)(\r\n        titleToCamelCaseNotation(preventBlock),\r\n        titleToCamelCaseNotation(title)\r\n      );\r\n    });\r\n  }\r\n\r\n  return mainSection;\r\n}\r\n\n\n//# sourceURL=webpack://kanban/./src/works-tasks/createNewList.js?");

/***/ }),

/***/ "./src/works-tasks/kanban.js":
/*!***********************************!*
  !*** ./src/works-tasks/kanban.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainContainer\": () => /* binding */ mainContainer\n/* harmony export */ });\n/* harmony import */ var _addMainDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMainDiv.js */ \"./src/works-tasks/addMainDiv.js\");\n\r\nconst mainContainer = document.querySelector('.main_container');\r\n\r\nmainContainer.append((0,_addMainDiv_js__WEBPACK_IMPORTED_MODULE_0__.addMainDivList)());\r\n\n\n//# sourceURL=webpack://kanban/./src/works-tasks/kanban.js?");

/***/ }),

/***/ "./src/works-tasks/newListItem.js":
/*!****************************************!*
  !*** ./src/works-tasks/newListItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newListItem\": () => /* binding */ newListItem\n/* harmony export */ });\nconst newListItem = (text) => {\r\n    const sectionMainItems = document.createElement('div');\r\n  \r\n    sectionMainItems.classList.add('main_section_main_items');\r\n    sectionMainItems.innerText = text;\r\n  \r\n    return sectionMainItems;\r\n  };\n\n//# sourceURL=webpack://kanban/./src/works-tasks/newListItem.js?");

/***/ }),

/***/ "./src/works-tasks/newListSelect.js":
/*!******************************************!*
  !*** ./src/works-tasks/newListSelect.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newListSelect\": () => /* binding */ newListSelect\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/works-tasks/store.js\");\n/* harmony import */ var _newListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newListItem.js */ \"./src/works-tasks/newListItem.js\");\n\r\n\r\n/* import {store} from './store.js' */\r\n\r\nconst newListSelect = (text, block, id, currentBlock, prevBlock) => {\r\n    const mainDiv = block\r\n      .closest('.main_div')\r\n      .querySelector(`.${currentBlock.toLowerCase()}`);\r\n  \r\n    const currentSectionMain = document.querySelector(\r\n      `.${currentBlock.toLowerCase()} .main_section_main `\r\n    );\r\n  \r\n    const selectList = document.createElement('select');\r\n  \r\n    block\r\n      .querySelector('.main_section_footer_but')\r\n      .setAttribute('disabled', 'disabled');\r\n  \r\n    if (block.querySelector('.addList')) {\r\n      const selectList = block.querySelector('.addList');\r\n      const optionList = document.createElement('option');\r\n  \r\n      optionList.classList.add(`ulListLi}`);\r\n      optionList.append(text);\r\n      selectList.append(optionList);\r\n  \r\n      return selectList;\r\n    }\r\n  \r\n    selectList.classList.add('addList');\r\n  \r\n    selectList.addEventListener('blur', () => {\r\n      const optionNum = block.querySelector('.addList').options.selectedIndex;\r\n      const optionText = block.querySelector('.addList').options[optionNum].value;\r\n  \r\n      block\r\n        .querySelector('.addList')\r\n        .options[optionNum].setAttribute('disabled', 'disabled');\r\n  \r\n      _store_js__WEBPACK_IMPORTED_MODULE_0__.store.deleted(optionNum + 1, prevBlock);\r\n      _store_js__WEBPACK_IMPORTED_MODULE_0__.store.add(optionText, id, currentBlock);\r\n      currentSectionMain.append((0,_newListItem_js__WEBPACK_IMPORTED_MODULE_1__.newListItem)(optionText, optionNum));\r\n    });\r\n  \r\n    mainDiv.addEventListener('mouseleave', () => {\r\n      if (document.querySelector('.addList')) {\r\n        block\r\n          .querySelector('.main_section_footer_but')\r\n          .removeAttribute('disabled');\r\n  \r\n        document.querySelector('.addList').remove();\r\n      }\r\n    });\r\n  \r\n    return selectList;\r\n  };\n\n//# sourceURL=webpack://kanban/./src/works-tasks/newListSelect.js?");

/***/ }),

/***/ "./src/works-tasks/store.js":
/*!**********************************!*
  !*** ./src/works-tasks/store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localDataMock\": () => /* binding */ localDataMock,\n/* harmony export */   \"store\": () => /* binding */ store\n/* harmony export */ });\n/* harmony import */ var _addMainDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMainDiv.js */ \"./src/works-tasks/addMainDiv.js\");\n/* harmony import */ var _kanban_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kanban.js */ \"./src/works-tasks/kanban.js\");\n\r\n\r\nconst LS_NAME_TASKS = 'tasks';\r\nconst localDataMock = JSON.parse(localStorage.getItem(LS_NAME_TASKS));\r\n\r\n\r\nlet dataMock = {\r\n  backlog: [{ id: 0, name: 'Login page – performance issues' }],\r\n\r\n  ready: [{ id: 0, name: 'Shop page – performance issues' }],\r\n\r\n  inProgress: [{ id: 0, name: 'User page – performance issues' }],\r\n\r\n  finished: [{ id: 0, name: 'Main page – performance issues' }],\r\n};\r\n\r\nconst saveData = localStorage.getItem(LS_NAME_TASKS);\r\nif (saveData) {\r\n  dataMock = JSON.parse(saveData);\r\n} else {\r\n  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(dataMock));\r\n}\r\n\r\nfunction newObjArrs(id, name) {\r\n  this.id = id;\r\n  this.name = name;\r\n}\r\n\r\nfunction Store() {\r\n  const data = localDataMock;\r\n\r\n  this.add = (text, id, block) => {\r\n    const obj = new newObjArrs(id, text);\r\n    data[block].push(obj);\r\n    const str = JSON.stringify(data);\r\n\r\n    localStorage.setItem(LS_NAME_TASKS, str);\r\n    document.querySelector('.main_div').remove();\r\n    _kanban_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.append((0,_addMainDiv_js__WEBPACK_IMPORTED_MODULE_0__.addMainDivList)());\r\n  };\r\n\r\n  this.deleted = (id, block) => {\r\n    data[block].splice(id, 1);\r\n\r\n    document.querySelector('.main_div').remove();\r\n    _kanban_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.append((0,_addMainDiv_js__WEBPACK_IMPORTED_MODULE_0__.addMainDivList)());\r\n  };\r\n\r\n  this.getData = () => data;\r\n}\r\nconst store = new Store();\r\n\n\n//# sourceURL=webpack://kanban/./src/works-tasks/store.js?");

/***/ }),

/***/ "./src/works-tasks/transitionList.js":
/*!*******************************************!*
  !*** ./src/works-tasks/transitionList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transitionToTheList\": () => /* binding */ transitionToTheList\n/* harmony export */ });\n/* harmony import */ var _newListSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newListSelect.js */ \"./src/works-tasks/newListSelect.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/works-tasks/store.js\");\n\r\n\r\nconst transitionToTheList = (prevBlock, currentBlock) => {\r\n    const currentId = `.${prevBlock} .main_section_main .main_section_main_items `.toLowerCase();\r\n    const prevSectionMainLength = document.querySelectorAll(currentId).length;\r\n    const currentSectionFooter = document.querySelector(\r\n      `.${currentBlock.toLowerCase()} .main_section_footer `\r\n    );\r\n  \r\n    for (let i = 0; i < prevSectionMainLength; i++) {\r\n      const currentBlockNewElements = (0,_newListSelect_js__WEBPACK_IMPORTED_MODULE_0__.newListSelect)(\r\n        _store_js__WEBPACK_IMPORTED_MODULE_1__.localDataMock[prevBlock][i].name,\r\n        currentSectionFooter,\r\n        prevSectionMainLength,\r\n        currentBlock,\r\n        prevBlock\r\n      );\r\n  \r\n      currentSectionFooter.append(currentBlockNewElements);\r\n    }\r\n  };\n\n//# sourceURL=webpack://kanban/./src/works-tasks/transitionList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/works-tasks/kanban.js");
/******/ })()
;