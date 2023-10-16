/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/ShowData.js":
/*!********************************!*\
  !*** ./js/modules/ShowData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToArticle: () => (/* binding */ GoToArticle),
/* harmony export */   ShowData: () => (/* binding */ ShowData)
/* harmony export */ });
function ShowData(articles){
    const InfoContainer = document.querySelector('#custom_news-data');
    InfoContainer.innerHTML = null;
    

    InfoContainer.classList.remove('custom_spinner_preload-container');
    InfoContainer.classList.add('main_content_news_block','row','p-4', 'px-lg-2', 'g-4', 'justify-content-center', 'justify-content-sm-between');
    const listItems = articles.map(item => {

        const div = document.createElement('div');
        div.classList.add('info_block', 'col-12','col-sm-5', 'p-2');
        div.setAttribute('data-goto', item.url);
        div.innerHTML = `
                <div class="info_block-img">
                    <img src="${item.image}">
                </div>
                <span class="info_block-date">${item.date}</span>
                <h3 class="info_block-title">${item.title}</h3>
                <span class="info_block-author">${item.author}</span>
                <p class="info_block-excerpt">${item.excerpt}</p>
            
        `; 
        return div;
      });
      listItems.forEach(item => {
        InfoContainer.append(item);
      });
}


async function GoToArticle() {
    const InfoContainer = document.querySelector('#custom_news-data');

    InfoContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.info_block');

        const ArticleData = getInfoAbout(target); 

        if(target !== null) {
            const link = target.getAttribute('data-goto');
            ArticleData.link = link;
            localStorage.setItem("data", JSON.stringify(ArticleData));
            window.location.href = 'src/pages/newsPage.html';
        }
    })
}

function getInfoAbout(infoBlock) {
    const title = infoBlock.querySelector('.info_block-title').innerText,
          date = infoBlock.querySelector('.info_block-date').innerText,
          author = infoBlock.querySelector('.info_block-author').innerText,
          image = infoBlock.querySelector('.info_block-img img').src;

    return {
        title: title,
        date: date,
        author: author,
        image: image
    };
}

/***/ }),

/***/ "./js/modules/requests.js":
/*!********************************!*\
  !*** ./js/modules/requests.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetArticles: () => (/* binding */ GetArticles)
/* harmony export */ });
async function GetArticles() {
    try {
        const res = await fetch('https://artichecker.com/parser/');
        const data = res.json();
        
        return data;

    }catch(e){
        console.log(e);
    }
}

/***/ }),

/***/ "./js/modules/scrollTo.js":
/*!********************************!*\
  !*** ./js/modules/scrollTo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTo: () => (/* binding */ ScrollTo)
/* harmony export */ });

function ScrollTo(){
    const links = document.querySelectorAll('.home_news');
       
    links.forEach(link => {
        link.addEventListener('click', (e) => {
        
            const gotoBlock = document.querySelector(e.target.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 90; 
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior:"smooth"
            })
            
            document.querySelector('.nav-menu-wrapper').classList.remove('show');
    })
    })
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
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrollTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollTo */ "./js/modules/scrollTo.js");
/* harmony import */ var _modules_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/requests */ "./js/modules/requests.js");
/* harmony import */ var _modules_ShowData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ShowData */ "./js/modules/ShowData.js");






(0,_modules_scrollTo__WEBPACK_IMPORTED_MODULE_0__.ScrollTo)();
(0,_modules_requests__WEBPACK_IMPORTED_MODULE_1__.GetArticles)()
    .then(data => {
        (0,_modules_ShowData__WEBPACK_IMPORTED_MODULE_2__.ShowData)(data);
        (0,_modules_ShowData__WEBPACK_IMPORTED_MODULE_2__.GoToArticle)();
    })

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map