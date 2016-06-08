var React = require('react');
var ReactDOM = require('react-dom');
var ColorItem = require('./color_item.jsx');
var PartitionItem = require('./partition_item.jsx');
var OrdinaryItem = require('./ordinary_item.jsx');
var ChargeItem = require('./charge_item.jsx');
var BackgroundItem = require('./background_item.jsx');

COLORS = ["gules", "sanguine", "azure", "celeste", "vert", "cendree", "sable", "white", "purpure", "murrey", "tawny", "senois", "rose-pink", "carnation", "argent", "or", "copper", "RESET"];
PARTITIONS = ["per-fess", "per-pale", "per-chevron", "per-chevron-reversed", "quarterly", "per-bend", "per-bend-sinister", "per-saltire", "chaussé", "flaunches", "tierced", "tierced-in-mantle", "bordure", "paly", "barry", "bendy", "bendy-sinister", "enarched", "angled", "RESET"]
ORDINARIES = ["fess", "bar", "barrulet", "pale", "pallet", "endorse", "chief", "comble", "bend", "bend-sinister", "quarter", "canton", "lozenge", "billet", "delf", "base", "cross", "saltire", "pairle", "pairle-reversed", "chevron", "tierce", "roundel", "annulet", "orle", "pale-and-chief", "pale-endorsed", "RESET"];
CHARGES = ["fleur", "lion", "eagle", "rose", "unicorn", "bow", "gate", "serpent", "bear", "key", "sun", "dragon", "horse", "panther", "octopus", "wolf", "RESET"];
BACKGROUNDS = ["parchment", "wood", "window", "cloak", "wall", "tile", "tapestry", "stone", "scroll", "gold", "wood-panels", "stone2", "versailles", "ceiling", "book-cover", "stained-glass", "window2", "white-fabric", "RESET"];
MOTTOES = ["motto-one", "motto-two", "motto-three", "motto-four", "motto-five", "motto-six", "motto-seven", "motto-eight", "RESET"];
TABS = ["main", "partition-menu", "ordinaries-menu", "charge-menu", "background-menu", "motto-menu"];
SAMPLE_MOTTOES = [
  "Saunz departir",
  "Loyaulté me lie",
  "Souvente me souvene",
  "Lux tua vita mihi",
  "Piu por dulzura que por fuerza",
  "Me pompae provexit apex",
  "Quod me alit, me extinguit",
  "Sic spectanda fides",
  "In hac spe vivo",
  "Aeque tandem",
  "Undique mors est",
  "Ainsi sera groigne qui groigne",
  "Semper eadem",
  "En ma fin gît mon commencement"
];

var ColorMenu = React.createClass({
  getInitialState: function () {
    return { show: true, color: "", menu: "main-tab", selected: "main-tab", partition: "", partitionColor: "", ordinaries: "", ordinariesColor: "", charge: "", chargeColor: "sable", background: "", motto: "", mottoColor: "", mottoBackground: "" };
  },

  toggleShow: function () {
    this.state.show == true ? this.setState({ show: false }) : this.setState({ show: true });
  },

  setColor: function (e) {
    var color = e.currentTarget.className;
    this.setState({ color: color });
  },

  setMenu: function (e) {
    var menu = e.currentTarget.className.split("-")[0] + "-" + e.currentTarget.className.split("-")[1];
    this.setState({ menu: menu });
  },

  setPartition: function (e) {
    var broken = e.currentTarget.className.split("-");
    var partition = broken[broken.length - 1] == "opt" ? broken.slice(0, broken.length - 1).join("-") : broken[0] + "-" + broken[1] + "-" + broken[2];

    this.setState({ partition: partition });
  },

  setPartitionColor: function (e) {
    var color = e.currentTarget.className;
    this.setState({ partitionColor: color })
  },

  setOrdinary: function (e) {
    var broken = e.currentTarget.className.split("-");
    var ordinary = broken[broken.length - 1] == "opt" ? broken.slice(0, broken.length - 1).join("-") : broken[0] + "-" + broken[1] + "-" + broken[2];
    this.setState({ ordinaries: ordinary });
  },

  setOrdinaryColor: function (e) {
    var color = e.currentTarget.className;
    this.setState({ ordinariesColor: color });
  },

  setCharge: function (e) {
    var charge = e.currentTarget.className.split("-")[0];
    this.setState({ charge: charge });
  },

  setChargeColor: function (e) {
    var color = e.currentTarget.className;
    this.setState({ chargeColor: color });
  },

  setBackground: function (e) {
    var background = e.currentTarget.className;
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
    var mottoBackground = e.currentTarget.className;
    this.setState({ mottoBackground: mottoBackground });
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

    this.setState({ color: this.randomize(COLORS)});
    this.setState({ partition: this.randomize(PARTITIONS)});
    this.setState({ partitionColor: this.randomize(COLORS)});
    this.setState({ ordinaries: this.randomize(ORDINARIES)});
    this.setState({ ordinariesColor: this.randomize(COLORS)});
    this.setState({ charge: this.randomize(CHARGES)});
    this.setState({ chargeColor: this.randomize(COLORS)});
    this.setState({ background: this.randomize(BACKGROUNDS)});
    this.setState({ mottoBackground: this.randomize(MOTTOES) });
    this.setState({ mottoColor: this.randomize(COLORS) });
    this.setState({ motto: this.randomize(SAMPLE_MOTTOES)});
  },


  resetAll: function () {
    this.setState({ color: "" });
    this.setState({ partition: "" });
    this.setState({ partitionColor: "" });
    this.setState({ ordinaries: "" });
    this.setState({ ordinariesColor: "" });
    this.setState({ charge: "" });
    this.setState({ chargeColor: "" });
    this.setState({ menu: "main-tab" });
    this.setState({ selected: "main-tab" });
    this.setState({ background: "" });
    this.setState({ mottoBackground: "" });
    this.setState({ motto: "" });
    this.setState({ mottoColor: "" });
  },


  render: function () {
    var menuClass = this.state.show ? "menu-div group" : "hidden";
    var self = this;

    var tabs = TABS.map(function(tab) {
      var active = tab == self.state.selected || (tab + "-tab") == self.state.selected ? " active" : ""

      return <li className={tab + "-tab" + active} key={TABS.indexOf(tab)} onClick={self.setTab}>{tab.split("-")[0]}</li>
    });

    MENU_OPTIONS = {
      "main": this.setColor,
      "partition": this.setPartitionColor,
      "ordinaries": this.setOrdinaryColor,
      "charge": this.setChargeColor,
      "background": this.setBackground,
      "motto": this.setMottoColor
    };

    var brokenMenu = this.state.menu.split("-");
    var currentMenu = brokenMenu.slice(0, brokenMenu.length - 1).join("-");

    var clickToSet = MENU_OPTIONS[currentMenu];
    var colorLis = COLORS.map(function(color) {
      return <ColorItem color={color} key={COLORS.indexOf(color)} setColor={clickToSet} />
    });

    var partitionLis = PARTITIONS.map(function(partition) {
      var active = partition == self.state.partition ? " active" : "";
      return <PartitionItem partition={partition + "-opt" + active} key={PARTITIONS.indexOf(partition)} name={partition} setPartition={self.setPartition} />
    });

    var ordinaryLis = ORDINARIES.map(function(ordinary) {
      var active = ordinary == self.state.ordinaries ? " active" : "";
      return <OrdinaryItem ordinary={ordinary + "-opt" + active} key={ORDINARIES.indexOf(ordinary)} name={ordinary} setOrdinary={self.setOrdinary} />
    });

    var chargeLis = CHARGES.map(function(charge) {
      var activity = charge == self.state.charge ? "-gules" : "-white";
      return <ChargeItem charge={charge} activity={activity} key={CHARGES.indexOf(charge)} setCharge={self.setCharge} />
    });

    var backgroundLis = BACKGROUNDS.map(function(background) {
      return <BackgroundItem background={background} key={BACKGROUNDS.indexOf(background)} setBackground={self.setBackground} />
    });

    var mottoLis = MOTTOES.map(function(motto) {
      return <li className={motto} key={MOTTOES.indexOf(motto)} onClick={self.setMottoBackground} />
    });

    var mainColor = this.state.color.length > 0 ? this.state.color : "";
    var ordinary = this.state.ordinaries.length > 0 ? ", a " + this.state.ordinaries : "";
    var ordinaryColor = this.state.ordinaries.length > 0 ? " " + this.state.ordinariesColor : "";
    var charge = this.state.charge.length > 0 ? ", " + this.state.charge : "";
    var chargeWithColor = this.state.charge + "-" + this.state.chargeColor;
    var mainMenu = <ul className="main-menu group"><li onClick={this.makeRandom}>RANDOM</li><li onClick={this.resetAll}>RESET ALL</li></ul>
    var partitionMenu = <ul className="partitions-menu group">{partitionLis}</ul>
    var ordinariesMenu = <ul className="ordinaries-menu group">{ordinaryLis}</ul>
    var chargeMenu = <ul className="charge-menu group" onClick={this.setMenu}>{chargeLis}</ul>
    var backgroundMenu =  <ul className="background-menu group">{backgroundLis}</ul>;
    var mottoInput = <input type="text" value={this.state.motto} onChange={this.setMotto}></input>;
    var mottoMenu = <ul className="motto-menu group">{mottoLis}{mottoInput}</ul>
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
      <div className="group">

        <h1>{mainColor}{ordinary}{ordinaryColor}</h1>
        <div className={menuClass}>
          <ul className="tabs group">{tabs}</ul>
          {selected}
          <ul className="color-menu group">{colorLis}</ul>
        </div>
        <div className={"shield-div group " + this.state.background}>
            <div className="inner group">
                <section className={"shield " + this.state.color}>
                  <section className={"partition " + this.state.partition + " " + this.state.partitionColor}></section>
                  <section className={"ordinary " + this.state.ordinaries + " " + this.state.ordinariesColor}></section>
                  <section className={"icon " + chargeWithColor}></section>
                </section>
                <section className={"motto " + this.state.mottoBackground + " " + this.state.mottoColor}><p>{this.state.motto}</p></section>

              </div>
          </div>

      </div>
    )

  }
});

module.exports = ColorMenu;
