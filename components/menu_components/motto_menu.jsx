var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');

MOTTOES = require('../../constants/motto_constants.js');
var MottoItem = require('./motto_item.jsx');

var MottoMenu = React.createClass({

  render: function () {
    var mottoInput = <input type="text" value={this.props.currentMotto} onChange={this.props.setMotto}></input>;
    var self = this;
    return <div>{mottoInput}<Carousel elements={MOTTOES} category="picture" background="contained" handleClick={this.props.setMottoBackground} /></div>;
  }

});

module.exports = MottoMenu;
