/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.field');
  const fieldBoard = [];
  const imgGoblin = document.createElement('img');
  imgGoblin.src = goblin_namespaceObject;
  for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement('div');
    field.append(newDiv);
    fieldBoard.push(newDiv);
  }
  let currentField = 0;
  function goblin() {
    fieldBoard[currentField].innerHTML = '';
    currentField = Math.floor(Math.random() * fieldBoard.length);
    fieldBoard[currentField].append(imgGoblin);
  }
  setInterval(goblin, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;