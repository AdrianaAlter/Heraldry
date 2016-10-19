var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');
CHARGES = require('../../constants/charge_constants.js');
var ChargeItem = require('./charge_item.jsx');

var ChargeMenu = React.createClass({

  render: function () {
    return <Carousel elements={CHARGES} category="picture" background="contained" handleClick={this.props.setCharge} />
  }

});

module.exports = ChargeMenu;
