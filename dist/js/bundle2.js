/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/serviceTabs.js":
/*!***********************************!*\
  !*** ./js/modules/serviceTabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesTabs: () => (/* binding */ ServicesTabs)
/* harmony export */ });
/* harmony import */ var _servicesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicesData */ "./js/modules/servicesData.js");


function ServicesTabs() {
    const data = (0,_servicesData__WEBPACK_IMPORTED_MODULE_0__.ServicesData)(),
          titles = document.querySelector('.services-titles'),
          content = document.querySelector('.services-content');

    data.forEach((obj, index) => {
        titles.innerHTML += `
            <div>${obj.title}</div>
        `;
    })

    
}

/***/ }),

/***/ "./js/modules/servicesData.js":
/*!************************************!*\
  !*** ./js/modules/servicesData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesData: () => (/* binding */ ServicesData)
/* harmony export */ });
function ServicesData() {
    return  [
        {
          title: "Corporate Law",
          description: "Our corporate law practice provides legal advice and representation to businesses and corporations in various industries. We can assist with everything from business formation and governance to mergers and acquisitions, corporate finance, and securities regulation."
        },
        {
          title: "Cyber Law",
          description: "Our cyber law practice provides legal advice and representation to businesses and individuals dealing with legal issues related to technology and the internet. We can assist with data privacy and security, intellectual property rights, e-commerce, and online speech."
        },
        {
          title: "Administrative Law",
          description: "Our administrative law practice provides legal advice and representation to individuals and businesses in dealing with federal and state agencies. We can assist with rulemaking, adjudication, and enforcement of regulations and laws."
        },
        {
          title: "Shipping & Maritime Law",
          description: "Our shipping and maritime law practice provides legal advice and representation to businesses and individuals involved in maritime commerce. We can assist with shipping, marine insurance, and international trade issues, including collisions, cargo disputes, environmental regulations, and admiralty law."
        },
        {
          title: "Transportation Law",
          description: "Our transportation law practice provides legal advice and representation to businesses and individuals involved in transportation of goods and people. We can assist with safety regulations, licensing, and liability related to aviation, rail, trucking, and public transportation."
        },
        {
          title: "Property Law",
          description: "Our property law practice provides legal advice and representation to individuals and businesses dealing with real and personal property ownership, use, and transfer. We can assist with real estate transactions, land use, and zoning."
        },
        {
          title: "Copyright Law",
          description: "Our copyright law practice provides legal advice and representation to individuals and businesses dealing with creative works, including music, literature, and art. We can assist with ownership, infringement, and fair use."
        },
        {
          title: "Penal Law",
          description: "Our penal law practice provides legal advice and representation to individuals and businesses dealing with criminal offenses and their punishment. We can assist with crimes against people and property, criminal procedure, and sentencing."
        },
        {
          title: "Family Law",
          description: "Our family law practice provides legal advice and representation to individuals and families dealing with legal issues related to marriage, divorce, child custody, and adoption. We can assist with property division, spousal support, and child support."
        }
      ];
      
      // Теперь у вас есть массив объектов с заголовками и описаниями практических областей.
      
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./js/services.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_serviceTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/serviceTabs */ "./js/modules/serviceTabs.js");



(0,_modules_serviceTabs__WEBPACK_IMPORTED_MODULE_0__.ServicesTabs)();
})();

/******/ })()
;
//# sourceMappingURL=bundle2.js.map