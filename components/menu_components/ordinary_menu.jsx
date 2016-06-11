var React = require('react');
var ReactDOM = require('react-dom');

ORDINARIES = require('../../constants/ordinary_constants.js');
var OrdinaryItem = require('./ordinary_item.jsx');

var OrdinaryMenu = React.createClass({
  render: function () {
    var self = this;
    var ordinaryLis = ORDINARIES.map(function(ordinary) {
      var active = ordinary == self.props.selected ? " active" : "";
      return <OrdinaryItem ordinary={ordinary + "-opt"} active={active} key={ORDINARIES.indexOf(ordinary)} name={ordinary} setOrdinary={self.props.setOrdinary} />
    });
    return <ul className="ordinaries-menu group">{ordinaryLis}</ul>;
  }

});

module.exports = OrdinaryMenu;
