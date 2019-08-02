/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/canvas */ "./src/scripts/modules/canvas.js");
 


 Object(_modules_canvas__WEBPACK_IMPORTED_MODULE_0__["canvasAnimation"])()

 

/***/ }),

/***/ "./src/scripts/modules/canvas.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/canvas.js ***!
  \***************************************/
/*! exports provided: canvasAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasAnimation", function() { return canvasAnimation; });
function canvasAnimation(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight


  let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  })
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // ballArr.forEach(ball => {
    //   ball.x = canvas.width / 2;
    //   ball.y = canvas.height / 2;
    // })
      init()
  })


  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  function Ball(x, y, radius, dx, color, radians) {
      this.x = x
      this.y = y 
      this.radius = radius
      this.color = color
      this.dx = dx
      // this.radians = Math.random() * (Math.PI * 2)
      this.radians = radians
      this.velocity = 0.02

      this.draw = function(){
        c.beginPath()
        c.strokeStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.stroke()
        c.lineWidth = 10
        c.closePath()
      }

      this.update = function(){
        // grow the ball bigger
        // if( this.radius * 2 > canvas.width || this.radius * 2 < 10) {
        //    this.dx = -this.dx
        // }

        // this.radius += this.dx 


        // x coordinate
        // if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
        //   this.dx = -this.dx
        // }
      
        // this.x += this.dx


        // Math.sin & Math.cos 
        this.radians += this.velocity 
               // original x cor
        this.x = x + Math.cos(this.radians) * 200
        //new x cor 
        this.y = y + Math.sin(this.radians) * 80

        this.draw()
    }
  }



  let ballArr;
  function init(){
    ballArr = []
    let radians = 0
    for( let i =0; i < 10; i++) {   
      radians += 30
      ballArr.push(new Ball(canvas.width/2, canvas.height/2, 50, 3, "pink", radians))
    }
  }
  
  
  function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    
    for(let i = 0; i < ballArr.length; i++) {
      ballArr[i].update()   
    }
  }
  
  init()
  animate()

}











/***/ })

/******/ });