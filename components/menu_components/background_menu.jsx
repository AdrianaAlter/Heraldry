var React = require('react');
var ReactDOM = require('react-dom');

BACKGROUNDS = require('../../constants/background_constants.js');
var BackgroundItem = require('./background_item.jsx');

var BackgroundMenu = React.createClass({

  render: function () {
    var self = this;
    var backgroundLis = BACKGROUNDS.map(function(background) {
      return <BackgroundItem background={background} key={BACKGROUNDS.indexOf(background)} name={background} setBackground={self.props.setBackground} />
    });
    return <ul className="background-menu group">{backgroundLis}</ul>;
  }

});

module.exports = BackgroundMenu;
