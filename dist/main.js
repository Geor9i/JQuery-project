/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("let i = 0\r\nlet maxCount = 4;\r\nconst loop = () => {\r\n    i = (i + 1) % maxCount;\r\n    let borderWidth = i === 1 ? '10px' : '0'; // Set border width based on current value of i\r\n    const border = ['top', 'right', 'bottom', 'left'];\r\n    const borderWidthProp = `border-${border[i]}-width`;\r\n    const borderColorProp = `border-${border[i]}-color`;\r\n    $('.box').eq(1).css('border', '8px solid black').animate({\r\n    [borderWidthProp] : '8px',\r\n    [borderColorProp] : 'red',\r\n}, 1000, loop)\r\n};\r\n\r\nloop()\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQsc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pxdWVyeS8uL3NyYy9hcHAuanM/MTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaSA9IDBcclxubGV0IG1heENvdW50ID0gNDtcclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICAgIGkgPSAoaSArIDEpICUgbWF4Q291bnQ7XHJcbiAgICBsZXQgYm9yZGVyV2lkdGggPSBpID09PSAxID8gJzEwcHgnIDogJzAnOyAvLyBTZXQgYm9yZGVyIHdpZHRoIGJhc2VkIG9uIGN1cnJlbnQgdmFsdWUgb2YgaVxyXG4gICAgY29uc3QgYm9yZGVyID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoUHJvcCA9IGBib3JkZXItJHtib3JkZXJbaV19LXdpZHRoYDtcclxuICAgIGNvbnN0IGJvcmRlckNvbG9yUHJvcCA9IGBib3JkZXItJHtib3JkZXJbaV19LWNvbG9yYDtcclxuICAgICQoJy5ib3gnKS5lcSgxKS5jc3MoJ2JvcmRlcicsICc4cHggc29saWQgYmxhY2snKS5hbmltYXRlKHtcclxuICAgIFtib3JkZXJXaWR0aFByb3BdIDogJzhweCcsXHJcbiAgICBbYm9yZGVyQ29sb3JQcm9wXSA6ICdyZWQnLFxyXG59LCAxMDAwLCBsb29wKVxyXG59O1xyXG5cclxubG9vcCgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;