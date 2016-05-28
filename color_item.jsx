var React = require('react');
var ReactDom = require('react-dom');

var ColorItem = React.createClass({

  render: function () {
    return <li className={this.props.color} onClick={this.props.setColor}></li>
  }

});

module.exports = ColorItem;
