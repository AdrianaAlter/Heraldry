var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');
COLORS = require('../../constants/color_constants.js');
var ColorItem = require('./color_item.jsx');
var Tabs = require('./tabs.jsx');
var Buttons = require('./buttons.jsx');
var PartitionMenu = require('./partition_menu.jsx');
var OrdinaryMenu = require('./ordinary_menu.jsx');
var ChargeMenu = require('./charge_menu.jsx');
var BackgroundMenu = require('./background_menu.jsx');
var MottoMenu = require('./motto_menu.jsx');
SAMPLE_MOTTOES = require('../../constants/sample_mottoes.js');
var Shield = require('../shield_components/shield.jsx');

var Menu = React.createClass({

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
    for (var i = 0; i < 5; i++ ){
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
    var colorLis = COLORS.map(function(color) {
      return <ColorItem color={color} key={COLORS.indexOf(color)} setColor={clickToSet} />
    });
    var mainColor = this.state.color.length > 0 ? this.state.color : "";
    var ordinary = this.state.ordinaries.length > 0 ? ", a " + this.state.ordinaries : "";
    var ordinaryColor = this.state.ordinaries.length > 0 ? " " + this.state.ordinariesColor : "";
    var charge = (this.state.charge && this.state.charge.length > 0) ? ", " + this.state.charge : "";
    var chargeWithColor = this.state.charge + "-" + this.state.chargeColor;
    var links = <section className="links"><a href="http://www.adrianaalter.site/">Adriana Alter</a> <a href="https://github.com/AdrianaAlter/Heraldry">github</a></section>
    var mainMenu = <div>{links}<Buttons randomize={this.makeRandom} reset={this.resetAll} hide={this.hide} /></div>;
    var partitionMenu = <PartitionMenu setPartition={this.setPartition} selected={this.state.partition} />;
    var ordinariesMenu = <OrdinaryMenu setOrdinary={this.setOrdinary} selected={this.state.ordinaries} />;
    var chargeMenu = <ChargeMenu setCharge={this.setCharge} selected={this.state.charge} />;
    var backgroundMenu =  <BackgroundMenu setBackground={this.setBackground} />;
    var mottoMenu = <MottoMenu setMotto={this.setMotto} setMottoBackground={this.setMottoBackground} currentMotto={this.state.motto} />;
    var menu = this.state.menu;

    var tabOptions = {
      "main-tab": mainMenu,
      "partition-menu": partitionMenu,
      "ordinaries-menu": ordinariesMenu,
      "charge-menu": chargeMenu,
      "background-menu": backgroundMenu,
      "motto-menu": mottoMenu
    };

    var selected = tabOptions[this.state.selected];

    return(
      <div className="main group">
        <Shield background={this.state.background}
                color={this.state.color}
                partition={this.state.partition + " " + this.state.partitionColor}
                ordinary={this.state.ordinaries + " " + this.state.ordinariesColor}
                charge={"icon " + chargeWithColor}
                mottoSpecs={this.state.mottoBackground + " " + this.state.mottoColor}
                motto={this.state.motto} />

        <ul className="colors group">{colorLis}</ul>
        <div className={menuClass}>
          <Tabs setTab={this.setTab} selected={this.state.selected} />
          {selected}
        </div>
      </div>
    )

  }
});

module.exports = Menu;
