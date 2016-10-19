var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Carousel/carousel.jsx');

BACKGROUNDS = require('../../constants/background_constants.js');
var BackgroundItem = require('./background_item.jsx');

var BackgroundMenu = React.createClass({

  render: function () {
    return <Carousel elements={BACKGROUNDS} background="covered" category="picture" handleClick={this.props.setBackground} />;
  }

});

module.exports = BackgroundMenu;
