var React = require('react');
var ReactDOM = require('react-dom');

MOTTOES = require('../../constants/motto_constants.js');
var MottoItem = require('./motto_item.jsx');

var MottoMenu = React.createClass({

  render: function () {
    var mottoInput = <input type="text" value={this.props.currentMotto} onChange={this.props.setMotto}></input>;
    var self = this;
    var mottoLis = MOTTOES.map(function(motto) {
      return <MottoItem motto={motto} key={MOTTOES.indexOf(motto)} name={motto} setMottoBackground={self.props.setMottoBackground} />
    });
    return <ul className="motto-menu group">{mottoLis}{mottoInput}</ul>;
  }

});

module.exports = MottoMenu;
