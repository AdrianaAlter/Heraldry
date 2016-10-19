/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Header = __webpack_require__(168);
	var Menu = __webpack_require__(169);
	
	// var Shield = require('./shield_components/shield.jsx');
	
	var App = React.createClass({
	  displayName: 'App',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Menu, null)
	    );
	  }
	});
	
	document.addEventListener("DOMContentLoaded", function () {
	  ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
	});

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Header = React.createClass({
	  displayName: 'Header',
	
	  render: function () {
	    return React.createElement(
	      'header',
	      { className: "group" },
	      'HERALDRY'
	    );
	  }
	});
	
	module.exports = Header;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Carousel = __webpack_require__(170);
	COLORS = __webpack_require__(176);
	var ColorItem = __webpack_require__(177);
	
	var Tabs = __webpack_require__(178);
	var Buttons = __webpack_require__(181);
	var PartitionMenu = __webpack_require__(184);
	var OrdinaryMenu = __webpack_require__(187);
	var ChargeMenu = __webpack_require__(190);
	var BackgroundMenu = __webpack_require__(193);
	var MottoMenu = __webpack_require__(196);
	
	SAMPLE_MOTTOES = __webpack_require__(199);
	// SUPPORTERS = ["goldlion", "whitelion", "redgryphon", "firebreather", "crownedbear"];
	
	var Shield = __webpack_require__(200);
	
	var Menu = React.createClass({
	  displayName: 'Menu',
	
	
	  getInitialState: function () {
	    return {
	      show: true,
	      color: "",
	      menu: "main-tab",
	      selected: "main-tab",
	      partition: "per-fess",
	      partitionColor: "",
	      ordinaries: "fess",
	      ordinariesColor: "",
	      charge: "",
	      chargeColor: "black",
	      background: "",
	      motto: "",
	      mottoColor: "black",
	      mottoBackground: ""
	    };
	  },
	
	  toggleShow: function () {
	    this.state.show == true ? this.setState({ show: false }) : this.setState({ show: true });
	  },
	
	  setColor: function (e) {
	    var color = e.currentTarget.className.split(" ");
	    this.setState({ color: color[color.length - 1] });
	  },
	
	  setMenu: function (e) {
	    var menu = e.currentTarget.className.split("-")[0] + "-" + e.currentTarget.className.split("-")[1];
	    this.setState({ menu: menu });
	  },
	
	  setPartition: function (e) {
	    this.setState({ partition: e.currentTarget.textContent });
	  },
	
	  setPartitionColor: function (e) {
	    var color = e.currentTarget.className.split(" ");
	    this.setState({ partitionColor: color[color.length - 1] });
	  },
	
	  setOrdinary: function (e) {
	    this.setState({ ordinaries: e.currentTarget.textContent });
	  },
	
	  setOrdinaryColor: function (e) {
	    var color = e.currentTarget.className.split(" ");
	    this.setState({ ordinariesColor: color[color.length - 1] });
	  },
	
	  setCharge: function (e) {
	    var charge = e.currentTarget.className.split(" ")[e.currentTarget.className.split(" ").length - 2];
	    this.setState({ charge: charge });
	  },
	
	  setChargeColor: function (e) {
	    var color = e.currentTarget.className.split(" ");
	    this.setState({ chargeColor: color[color.length - 1] });
	  },
	
	  setBackground: function (e) {
	    var broken = e.currentTarget.className.split(" ");
	    background = broken.length > 1 ? broken[broken.length - 2] : broken;
	    this.setState({ background: background });
	  },
	
	  setMotto: function (e) {
	    var motto = e.currentTarget.value;
	    this.setState({ motto: motto });
	  },
	
	  setMottoColor: function (e) {
	    var color = e.currentTarget.className;
	    this.setState({ mottoColor: color });
	  },
	  setMottoBackground: function (e) {
	    var mottoBackground = e.currentTarget.className.split(" ")[2];
	    this.setState({ mottoBackground: mottoBackground });
	  },
	
	  setSupporter: function (e) {
	    var supporterLeft = e.currentTarget.className;
	    this.setState({ supporterLeft: supporterLeft });
	  },
	
	  setCompartment: function (e) {
	    var compartment = e.currentTarget.className;
	    this.setState({ compartment: compartment });
	  },
	
	  setTab: function (e) {
	    var broken = e.currentTarget.className.split("-");
	    var tab = broken[0] + "-" + broken[1];
	    this.setState({ selected: tab });
	    this.setMenu(e);
	  },
	
	  randomize: function (array) {
	    var i = Math.floor(Math.random() * (array.length - 0));
	    return array[i];
	  },
	
	  makeRandom: function () {
	
	    var randomColors = [];
	    for (var i = 0; i < 5; i++) {
	      randomColors.push(this.randomize(COLORS));
	    };
	
	    this.setState({ color: randomColors[0],
	      partitionColor: randomColors[1],
	      ordinaryColor: randomColors[2],
	      chargeColor: randomColors[3],
	      mottoColor: randomColors[4]
	    });
	
	    this.setState({ partition: this.randomize(PARTITIONS),
	      ordinaries: this.randomize(ORDINARIES),
	      charge: this.randomize(CHARGES),
	      background: this.randomize(BACKGROUNDS.concat(COLORS)),
	      mottoBackground: this.randomize(MOTTOES),
	      motto: this.randomize(SAMPLE_MOTTOES)
	    });
	
	    // this.setState({ supporterLeft: this.randomize(SUPPORTERS)});
	    // this.setState({ compartment: this.randomize(COLORS)});
	  },
	
	  resetAll: function () {
	    this.setState({ color: "",
	      partition: "",
	      partitionColor: "",
	      ordinaries: "",
	      ordinariesColor: "",
	      charge: "",
	      chargeColor: "",
	      menu: "main-tab",
	      selected: "main-tab",
	      background: "",
	      mottoBackground: "",
	      motto: "",
	      mottoColor: "",
	      supporterLeft: "",
	      supporterRight: "",
	      compartment: ""
	    });
	  },
	
	  hide: function () {
	    this.setState({ show: false });
	  },
	
	  render: function () {
	    var menuClass = this.state.show ? "menu-div group" : "hidden";
	    var self = this;
	
	    // var tabs = TABS.map(function(tab) {
	    //   var active = tab == self.state.selected || (tab + "-tab") == self.state.selected ? " active" : ""
	    //
	    //   return <li className={tab + "-tab" + active} key={TABS.indexOf(tab)} onClick={self.setTab}>{tab.split("-")[0]}</li>
	    // });
	
	    MENU_OPTIONS = {
	      "main": this.setColor,
	      "partition": this.setPartitionColor,
	      "ordinaries": this.setOrdinaryColor,
	      "charge": this.setChargeColor,
	      "background": this.setBackground,
	      "motto": this.setMottoColor,
	      "supporter": this.setCompartment
	    };
	
	    var brokenMenu = this.state.menu.split("-");
	    var currentMenu = brokenMenu.slice(0, brokenMenu.length - 1).join("-");
	
	    var clickToSet = MENU_OPTIONS[currentMenu];
	    var colorLis = COLORS.map(function (color) {
	      return React.createElement(ColorItem, { color: color, key: COLORS.indexOf(color), setColor: clickToSet });
	    });
	
	    // var supporterLis = SUPPORTERS.map(function(supporter) {
	    //   return <li className={supporter} key={SUPPORTERS.indexOf(supporter)} onClick={self.setSupporter} />
	    // });
	
	    var mainColor = this.state.color.length > 0 ? this.state.color : "";
	    var ordinary = this.state.ordinaries.length > 0 ? ", a " + this.state.ordinaries : "";
	    var ordinaryColor = this.state.ordinaries.length > 0 ? " " + this.state.ordinariesColor : "";
	    var charge = this.state.charge && this.state.charge.length > 0 ? ", " + this.state.charge : "";
	    var chargeWithColor = this.state.charge + "-" + this.state.chargeColor;
	    // var mottoInput = <input type="text" value={this.state.currentMotto} onChange={this.setMotto}></input>;
	    var links = React.createElement(
	      'section',
	      { className: 'links' },
	      React.createElement(
	        'a',
	        { href: 'http://www.adrianaalter.site/' },
	        'Adriana Alter'
	      ),
	      ' ',
	      React.createElement(
	        'a',
	        { href: 'https://github.com/AdrianaAlter/Heraldry' },
	        'github'
	      )
	    );
	    var mainMenu = React.createElement(
	      'div',
	      null,
	      links,
	      React.createElement(Buttons, { randomize: this.makeRandom, reset: this.resetAll, hide: this.hide })
	    );
	    var partitionMenu = React.createElement(PartitionMenu, { setPartition: this.setPartition, selected: this.state.partition });
	    var ordinariesMenu = React.createElement(OrdinaryMenu, { setOrdinary: this.setOrdinary, selected: this.state.ordinaries });
	    var chargeMenu = React.createElement(ChargeMenu, { setCharge: this.setCharge, selected: this.state.charge });
	    var backgroundMenu = React.createElement(BackgroundMenu, { setBackground: this.setBackground });
	    var mottoMenu = React.createElement(MottoMenu, { setMotto: this.setMotto, setMottoBackground: this.setMottoBackground, currentMotto: this.state.motto });
	
	    var menu = this.state.menu;
	
	    // var supporterMenu =  <ul className="supporter-menu group">{supporterLis}</ul>;
	
	    var tabOptions = {
	      "main-tab": mainMenu,
	      "partition-menu": partitionMenu,
	      "ordinaries-menu": ordinariesMenu,
	      "charge-menu": chargeMenu,
	      "background-menu": backgroundMenu,
	      "motto-menu": mottoMenu
	      // "supporter-menu": supporterMenu
	    };
	
	    var selected = tabOptions[this.state.selected];
	
	    return React.createElement(
	      'div',
	      { className: 'main group' },
	      React.createElement(Shield, { background: this.state.background,
	        color: this.state.color,
	        partition: this.state.partition + " " + this.state.partitionColor,
	        ordinary: this.state.ordinaries + " " + this.state.ordinariesColor,
	        charge: "icon " + chargeWithColor,
	        mottoSpecs: this.state.mottoBackground + " " + this.state.mottoColor,
	        motto: this.state.motto }),
	      React.createElement(
	        'ul',
	        { className: 'colors group' },
	        colorLis
	      ),
	      React.createElement(
	        'div',
	        { className: menuClass },
	        React.createElement(Tabs, { setTab: this.setTab, selected: this.state.selected }),
	        selected
	      )
	    );
	  }
	});
	
	module.exports = Menu;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Wrapper = __webpack_require__(171);
	
	var Carousel = React.createClass({
	  displayName: 'Carousel',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'carousel group' },
	      React.createElement(Wrapper, { elements: this.props.elements, category: this.props.category, background: this.props.background, handleClick: this.props.handleClick })
	    );
	  }
	});
	
	module.exports = Carousel;

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var List = __webpack_require__(172);
	var Buttons = __webpack_require__(174);
	var Dots = __webpack_require__(175);
	
	var Wrapper = React.createClass({
	  displayName: 'Wrapper',
	
	  getInitialState: function () {
	    return { leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4, active: 0, background: "" };
	  },
	
	  componentDidMount: function () {
	    this.props.elements.length == 5 ? this.setState({ over: true }) : this.setState({ over: false });
	  },
	
	  slide: function () {
	
	    var limit = this.props.elements.length - 3;
	    if (this.state.center == limit) {
	      this.loop();
	    } else {
	      var newCenter = this.state.center + 1;
	      var newLeftLeft = newCenter - 2;
	      var newLeft = newCenter - 1;
	      var newRight = newCenter + 1;
	      var newRightRight = newCenter + 2;
	      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
	    };
	  },
	
	  loop: function () {
	    this.setState({ rightRight: this.state.rightRight + 1 - this.props.elements.length, right: this.state.rightRight, center: this.state.right, left: this.state.center, leftLeft: this.state.left });
	  },
	
	  loopBack: function () {
	    var newLeftLeft = this.props.elements.length - 1;
	    var newLeft = newLeftLeft - 1;
	    var newCenter = newLeftLeft + 1;
	    this.setState({ rightRight: this.state.right, right: this.state.center, center: newCenter, left: newLeft, leftLeft: newLeftLeft });
	  },
	
	  slideBack: function () {
	    if (this.state.center == 2) {
	      this.loopBack();
	    } else {
	      var newCenter = this.state.center - 1;
	      var newLeftLeft = newCenter - 2;
	      var newLeft = newCenter - 1;
	      var newRight = newCenter + 1;
	      var newRightRight = newCenter + 2;
	      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
	    };
	  },
	
	  isOver: function () {
	
	    this.setState({ over: true, leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4 });
	  },
	
	  bringCenter: function (e) {
	    var newItem;
	    var newCenter;
	    if (e.currentTarget.textContent.length > 1) {
	      newItem = e.currentTarget.textContent;
	    } else {
	      var broken = e.currentTarget.className.split(" ");
	      if (broken.join().split("-").includes("opt")) {
	        var first = broken.join().split("-")[0].split(",");
	        if (this.props.elements.includes(first)) {
	          newItem = first.slice(0, first.length - 1);
	        } else {
	          var last = broken[broken.length - 1].split("-");
	          newItem = last.slice(0, last.length - 1).join("-");
	        }
	      } else {
	        newItem = broken[broken.length - 2];
	      }
	    };
	    newCenter = this.props.elements.indexOf(newItem);
	
	    if (newCenter - 2 < 0) {
	      newCenter = this.props.elements.length + Math.abs(newCenter);
	    };
	    this.setState({ center: newCenter, left: newCenter - 1, leftLeft: newCenter - 2, right: newCenter + 1, rightRight: newCenter + 2 });
	  },
	
	  activate: function (e) {
	    var newItem;
	    var activeIdx;
	    if (e.currentTarget.textContent.length > 1) {
	      newItem = e.currentTarget.textContent;
	    } else {
	      var broken = e.currentTarget.className.split(" ");
	      if (broken.join().split("-").includes("opt")) {
	        var first = broken.join().split("-")[0].split(",");
	        if (this.props.elements.includes(first)) {
	          newItem = first.slice(0, first.length - 1);
	        } else {
	          var last = broken[broken.length - 1].split("-");
	          newItem = last.slice(0, last.length - 1).join("-");
	        }
	      } else {
	        newItem = broken[broken.length - 2];
	      }
	    };
	
	    activeIdx = this.props.elements.indexOf(newItem);
	    this.setState({ active: activeIdx });
	  },
	
	  setBG: function (e) {
	    var bg = e.currentTarget.className.split(" ")[2];
	    this.setState({ background: bg });
	  },
	
	  handleClick: function (e) {
	    this.activate(e);
	    this.bringCenter(e);
	    this.props.handleClick(e);
	  },
	
	  render: function () {
	
	    return React.createElement(
	      'div',
	      { className: "wrapper group " + this.state.background },
	      React.createElement(
	        'h1',
	        null,
	        'Active: ',
	        this.state.active,
	        ' LeftLeft: ',
	        this.state.leftLeft,
	        ' Left: ',
	        this.state.left,
	        ' Center: ',
	        this.state.center,
	        ' Right: ',
	        this.state.right,
	        ' RightRight: ',
	        this.state.rightRight
	      ),
	      React.createElement(List, { handleClick: this.handleClick, category: this.props.category, background: this.props.background, activeIdx: this.state.active, elements: this.props.elements, leftLeft: this.state.leftLeft, left: this.state.left, center: this.state.center, right: this.state.right, rightRight: this.state.rightRight }),
	      React.createElement(Buttons, { first: this.props.leftLeft, done: this.state.over, isOver: this.props.isOver, slide: this.slide, slideBack: this.slideBack }),
	      React.createElement(Dots, { elements: this.props.elements, handleClick: this.handleClick, active: this.state.active })
	    );
	  }
	
	});
	
	module.exports = Wrapper;

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Item = __webpack_require__(173);
	
	var List = React.createClass({
	  displayName: 'List',
	
	
	  render: function () {
	
	    var self = this;
	    ARRAY = this.props.elements;
	
	    var items = ARRAY.map(function (item) {
	
	      var key = ARRAY.indexOf(item);
	
	      var isActive = self.props.activeIdx == key ? " active " : " inactive ";
	      var isLeftLeft = self.props.leftLeft % ARRAY.length == key ? true : false;
	      var isLeft = self.props.left % ARRAY.length == key ? true : false;
	      var isCenter = self.props.center % ARRAY.length == key ? true : false;
	      var isRight = self.props.right % ARRAY.length == key ? true : false;
	      var isRightRight = self.props.rightRight % ARRAY.length == key ? true : false;
	
	      var isShowing = isLeftLeft || isLeft || isCenter || isRight || isRightRight ? "" : "hidden";
	
	      var position;
	
	      if (isLeftLeft) {
	        position = "left-left";
	      } else if (isLeft) {
	        position = "left";
	      } else if (isCenter) {
	        position = "center";
	      } else if (isRight) {
	        position = "right";
	      } else if (isRightRight) {
	        position = "right-right";
	      } else {
	        position = "";
	      };
	
	      return React.createElement(Item, { handleClick: self.props.handleClick, category: self.props.category, background: self.props.background, content: item, key: key, active: isActive, status: isShowing + position, activate: self.activate });
	    });
	
	    return React.createElement(
	      'ul',
	      { className: 'list group' },
	      items
	    );
	  }
	
	});
	
	module.exports = List;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Item = React.createClass({
	  displayName: 'Item',
	
	
	  render: function () {
	    var className = this.props.category == "picture" ? this.props.status + this.props.active + this.props.content : this.props.status + this.props.active + this.props.content + "-opt";
	    var content = this.props.category == "text" ? this.props.content : "";
	    var click = this.props.handleClick;
	
	    return React.createElement(
	      'li',
	      { onClick: click, className: className + " " + this.props.background },
	      content
	    );
	  }
	
	});
	
	module.exports = Item;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Buttons = React.createClass({
	  displayName: 'Buttons',
	
	
	  render: function () {
	
	    // var handleClick2 = this.props.leftLeft == 0 ? null : this.props.slideBack
	    // var click = this.props.slide;
	    // var text = this.props.done ? "TRUE" : "FALSE";
	    return React.createElement(
	      'section',
	      null,
	      React.createElement('button', { onClick: this.props.slide }),
	      React.createElement('button', { onClick: this.props.slideBack })
	    );
	  }
	
	});
	
	module.exports = Buttons;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Dots = React.createClass({
	  displayName: 'Dots',
	
	  getInitialState: function () {
	    return { activeIdx: 0 };
	  },
	
	  componentDidMount: function () {
	    this.setState({ activeIdx: this.props.active });
	  },
	
	  render: function () {
	    var self = this;
	    var dotLis = this.props.elements.map(function (element) {
	      var idx = self.props.elements.indexOf(element);
	
	      var active = self.state.activeIdx == idx ? " dot-active " : " inactive ";
	
	      return React.createElement('li', { className: active + " dot " + ", " + element + "-opt", key: self.props.elements.indexOf(element), onClick: self.props.handleClick });
	    });
	
	    return React.createElement(
	      'ul',
	      { className: 'dots' },
	      dotLis
	    );
	  }
	
	});
	
	module.exports = Dots;

/***/ },

/***/ 176:
/***/ function(module, exports) {

	COLORS = ["gules", "sanguine", "azure", "celeste", "vert", "viridian", "cendree", "lead", "sable", "white", "purpure", "murrey", "tawny", "senois", "bisque", "rose-pink", "carnation", "amaranth", "argent", "or", "copper"];
	
	module.exports = COLORS;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var ColorItem = React.createClass({
	  displayName: 'ColorItem',
	
	
	  render: function () {
	    return React.createElement('li', { className: this.props.color, onClick: this.props.setColor });
	  }
	
	});
	
	module.exports = ColorItem;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	TABS = __webpack_require__(179);
	var TabItem = __webpack_require__(180);
	
	var Tabs = React.createClass({
	  displayName: 'Tabs',
	
	
	  render: function () {
	
	    var self = this;
	
	    var tabLis = TABS.map(function (tab) {
	      var active = tab == self.props.selected ? " active" : "";
	      return React.createElement(TabItem, {
	        tab: tab,
	        active: active,
	        key: TABS.indexOf(tab),
	        setTab: self.props.setTab
	      });
	    });
	
	    return React.createElement(
	      'ul',
	      { className: 'tabs group' },
	      tabLis
	    );
	  }
	
	});
	
	module.exports = Tabs;

/***/ },

/***/ 179:
/***/ function(module, exports) {

	TABS = ["main", "partition-menu", "ordinaries-menu", "charge-menu", "motto-menu", "background-menu"];
	
	module.exports = TABS;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var TabItem = React.createClass({
	  displayName: 'TabItem',
	
	
	  render: function () {
	
	    return React.createElement(
	      'li',
	      { className: this.props.tab + "-tab" + this.props.active,
	        onClick: this.props.setTab },
	      this.props.tab.split("-")[0]
	    );
	  }
	
	});
	
	module.exports = TabItem;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Randomizer = __webpack_require__(182);
	var Resetter = __webpack_require__(183);
	
	var Buttons = React.createClass({
	  displayName: 'Buttons',
	
	
	  render: function () {
	    return React.createElement(
	      'ul',
	      { className: 'main-menu group' },
	      React.createElement(Randomizer, { randomize: this.props.randomize }),
	      React.createElement(Resetter, { reset: this.props.reset })
	    );
	  }
	
	});
	
	module.exports = Buttons;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Randomizer = React.createClass({
	  displayName: 'Randomizer',
	
	
	  render: function () {
	    return React.createElement(
	      'li',
	      { onClick: this.props.randomize },
	      'RANDOM'
	    );
	  }
	
	});
	
	module.exports = Randomizer;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Resetter = React.createClass({
	  displayName: 'Resetter',
	
	
	  render: function () {
	    return React.createElement(
	      'li',
	      { onClick: this.props.reset },
	      'RESET'
	    );
	  }
	
	});
	
	module.exports = Resetter;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	PARTITIONS = __webpack_require__(185);
	var PartitionItem = __webpack_require__(186);
	var Carousel = __webpack_require__(170);
	
	var PartitionMenu = React.createClass({
	  displayName: 'PartitionMenu',
	
	
	  render: function () {
	    return React.createElement(Carousel, { elements: PARTITIONS, category: 'text', handleClick: this.props.setPartition });
	  }
	
	});
	
	module.exports = PartitionMenu;
	
	// var active = partition == self.state.partition ? " active" : "";

/***/ },

/***/ 185:
/***/ function(module, exports) {

	PARTITIONS = ["per-fess", "per-pale", "per-chevron", "per-chevron-reversed", "quarterly", "per-bend", "per-bend-sinister", "per-saltire", "chaussé", "chapé", "flaunches", "tierced-in-pale", "tierced-in-fess", "tierced-in-mantle", "bordure", "paly", "barry", "bendy", "bendy-sinister", "enarched-per-fess", "enarched-per-pale", "angled-per-fess", "angled-per-pale"];
	
	module.exports = PARTITIONS;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var PartitionItem = React.createClass({
	  displayName: 'PartitionItem',
	
	
	  render: function () {
	    return React.createElement(
	      'li',
	      { className: this.props.partition + this.props.active, onClick: this.props.setPartition },
	      this.props.name
	    );
	  }
	
	});
	
	module.exports = PartitionItem;

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Carousel = __webpack_require__(170);
	
	ORDINARIES = __webpack_require__(188);
	var OrdinaryItem = __webpack_require__(189);
	
	var OrdinaryMenu = React.createClass({
	  displayName: 'OrdinaryMenu',
	
	  render: function () {
	
	    return React.createElement(Carousel, { elements: ORDINARIES, category: 'text', handleClick: this.props.setOrdinary });
	    // var self = this;
	    // var ordinaryLis = ORDINARIES.map(function(ordinary) {
	    //   var active = ordinary == self.props.selected ? " active" : "";
	    //   return <OrdinaryItem ordinary={ordinary + "-opt"} active={active} key={ORDINARIES.indexOf(ordinary)} name={ordinary} setOrdinary={self.props.setOrdinary} />
	    // });
	    // return <ul className="ordinaries-menu group">{ordinaryLis}</ul>;
	  }
	
	});
	
	module.exports = OrdinaryMenu;

/***/ },

/***/ 188:
/***/ function(module, exports) {

	ORDINARIES = ["fess", "bar", "barrulet", "fess-cotised", "fess-rompu", "pale", "pallet", "endorse", "pale-endorsed", "pale-rompu", "chief", "comble", "bend", "bend-cotised", "bend-sinister", "bend-sinister-cotised", "bend-enhanced", "bend-enhanced-cotised", "bend-sinister-enhanced", "bend-sinister-enhanced-cotised", "quarter", "canton", "lozenge", "billet", "delf", "base", "cross", "cross-nowy", "cross-quadrate", "saltire", "saltire-nowy", "saltire-quadrate", "pairle", "pairle-reversed", "chevron", "chevron-reversed", "gyron", "pile", "pile-reversed", "tierce", "roundel", "annulet", "orle", "pale-and-chief"];
	
	module.exports = ORDINARIES;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var OrdinaryItem = React.createClass({
	  displayName: 'OrdinaryItem',
	
	
	  render: function () {
	    return React.createElement(
	      'li',
	      { className: this.props.ordinary + this.props.active, onClick: this.props.setOrdinary },
	      this.props.name
	    );
	  }
	
	});
	
	module.exports = OrdinaryItem;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Carousel = __webpack_require__(170);
	CHARGES = __webpack_require__(191);
	// CHARGES = ["fleur", "panther", "bear", "serpent", "key"];
	var ChargeItem = __webpack_require__(192);
	
	var ChargeMenu = React.createClass({
	  displayName: 'ChargeMenu',
	
	
	  render: function () {
	
	    return React.createElement(Carousel, { elements: CHARGES, category: 'picture', background: 'contained', handleClick: this.props.setCharge });
	    // var self = this;
	
	    // var chargeLis = CHARGES.map(function(charge) {
	    //   var active = charge == self.props.selected ? "-gules" : "-white";
	    //   return <ChargeItem charge={charge} active={active} key={CHARGES.indexOf(charge)} name={charge} setCharge={self.props.setCharge} />
	    // });
	    // return <ul className="charge-menu group">{chargeLis}</ul>;
	  }
	
	});
	
	module.exports = ChargeMenu;
	
	// var activity = charge == self.state.charge ? "-gules" : "-white";

/***/ },

/***/ 191:
/***/ function(module, exports) {

	CHARGES = ["fleur", "lion", "eagle", "rose", "unicorn", "bow", "gate", "serpent", "bear", "key", "sun", "dragon", "horse", "panther", "octopus", "wolf"];
	
	module.exports = CHARGES;

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var ChargeItem = React.createClass({
	  displayName: 'ChargeItem',
	
	
	  render: function () {
	    return React.createElement('li', { className: this.props.charge + this.props.active, onClick: this.props.setCharge });
	  }
	
	});
	
	module.exports = ChargeItem;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Carousel = __webpack_require__(170);
	
	BACKGROUNDS = __webpack_require__(194);
	var BackgroundItem = __webpack_require__(195);
	
	var BackgroundMenu = React.createClass({
	  displayName: 'BackgroundMenu',
	
	
	  render: function () {
	    // var self = this;
	    // var backgroundLis = BACKGROUNDS.map(function(background) {
	    //   return <BackgroundItem background={background} key={BACKGROUNDS.indexOf(background)} name={background} setBackground={self.props.setBackground} />
	    // });
	
	    return React.createElement(Carousel, { elements: BACKGROUNDS, background: 'covered', category: 'picture', handleClick: this.props.setBackground });
	  }
	
	});
	
	module.exports = BackgroundMenu;

/***/ },

/***/ 194:
/***/ function(module, exports) {

	BACKGROUNDS = ["parchment", "wood", "window", "cloak", "wall", "tile", "tapestry", "stone", "scroll", "gold", "wood-panels", "stone2", "versailles", "ceiling", "book-cover", "stained-glass", "window2", "white-fabric", "magic", "flower-frame", "canvas", "tile2", "rust", "parchment3", "writing", "metal-wall", "berries", "rug", "filigree", "flower-page", "checkers"];
	
	module.exports = BACKGROUNDS;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var BackgroundItem = React.createClass({
	  displayName: 'BackgroundItem',
	
	
	  render: function () {
	    return React.createElement('li', { className: this.props.background, onClick: this.props.setBackground });
	  }
	
	});
	
	module.exports = BackgroundItem;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Carousel = __webpack_require__(170);
	
	MOTTOES = __webpack_require__(197);
	var MottoItem = __webpack_require__(198);
	
	var MottoMenu = React.createClass({
	  displayName: 'MottoMenu',
	
	
	  render: function () {
	    var mottoInput = React.createElement('input', { type: 'text', value: this.props.currentMotto, onChange: this.props.setMotto });
	    var self = this;
	    return React.createElement(
	      'div',
	      null,
	      mottoInput,
	      React.createElement(Carousel, { elements: MOTTOES, category: 'picture', background: 'contained', handleClick: this.props.setMottoBackground })
	    );
	  }
	
	});
	
	module.exports = MottoMenu;

/***/ },

/***/ 197:
/***/ function(module, exports) {

	MOTTOES = ["motto-one", "motto-two", "motto-three", "motto-four", "motto-five", "motto-six", "motto-seven", "motto-eight"];
	
	module.exports = MOTTOES;

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var MottoItem = React.createClass({
	  displayName: 'MottoItem',
	
	
	  render: function () {
	    return React.createElement('li', { className: this.props.motto, onClick: this.props.setMottoBackground });
	  }
	
	});
	
	module.exports = MottoItem;

/***/ },

/***/ 199:
/***/ function(module, exports) {

	SAMPLE_MOTTOES = ["Saunz departir", "Loyaulté me lie", "Souvente me souvene", "Lux tua vita mihi", "Piu por dulzura que por fuerza", "Me pompae provexit apex", "Quod me alit, me extinguit", "Sic spectanda fides", "In hac spe vivo", "Aeque tandem", "Undique mors est", "Ainsi sera groigne qui groigne", "Semper eadem", "En ma fin gît mon commencement"];
	
	module.exports = SAMPLE_MOTTOES;

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Partition = __webpack_require__(201);
	var Ordinary = __webpack_require__(202);
	var Charge = __webpack_require__(203);
	var Motto = __webpack_require__(204);
	
	var Shield = React.createClass({
	  displayName: 'Shield',
	
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: "shield-div group " + this.props.background },
	      React.createElement(
	        'div',
	        { className: 'inner group' },
	        React.createElement(
	          'section',
	          { className: "shield " + this.props.color },
	          React.createElement(Partition, { partition: "partition " + this.props.partition }),
	          React.createElement(Ordinary, { ordinary: "ordinary " + this.props.ordinary }),
	          React.createElement(Charge, { charge: this.props.charge })
	        ),
	        React.createElement(Motto, { mottoSpecs: this.props.mottoSpecs, motto: this.props.motto })
	      )
	    );
	  }
	});
	
	module.exports = Shield;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Partition = React.createClass({
	  displayName: 'Partition',
	
	
	  render: function () {
	    return React.createElement('section', { className: "partition " + this.props.partition });
	  }
	
	});
	
	module.exports = Partition;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Ordinary = React.createClass({
	  displayName: 'Ordinary',
	
	
	  render: function () {
	    return React.createElement('section', { className: "ordinary " + this.props.ordinary });
	  }
	
	});
	
	module.exports = Ordinary;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Charge = React.createClass({
	  displayName: 'Charge',
	
	
	  render: function () {
	    return React.createElement('section', { className: this.props.charge });
	  }
	
	});
	
	module.exports = Charge;

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Motto = React.createClass({
	  displayName: 'Motto',
	
	
	  render: function () {
	    return React.createElement(
	      'section',
	      { className: "motto " + this.props.mottoSpecs },
	      React.createElement(
	        'p',
	        null,
	        this.props.motto
	      )
	    );
	  }
	
	});
	
	module.exports = Motto;

/***/ }

/******/ });
//# sourceMappingURL=bundle.js.map