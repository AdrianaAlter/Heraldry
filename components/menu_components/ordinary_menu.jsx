var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');

ORDINARIES = require('../../constants/ordinary_constants.js');
var OrdinaryItem = require('./ordinary_item.jsx');

var OrdinaryMenu = React.createClass({

  render: function () {
    return <Carousel elements={ORDINARIES} category="text" handleClick={this.props.setOrdinary} />
  }

});

module.exports = OrdinaryMenu;
