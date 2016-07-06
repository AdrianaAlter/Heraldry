var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');
CHARGES = require('../../constants/charge_constants.js');
// CHARGES = ["fleur", "panther", "bear", "serpent", "key"];
var ChargeItem = require('./charge_item.jsx');

var ChargeMenu = React.createClass({

  render: function () {

    return <Carousel elements={CHARGES} category="picture" background="contained" handleClick={this.props.setCharge} />
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
