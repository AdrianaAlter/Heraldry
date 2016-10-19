var React = require('react');
var ReactDom = require('react-dom');

var PatternItem = React.createClass({

  render: function () {
    return <li className={this.props.pattern} onClick={this.props.setPattern}></li>
  }

});

module.exports = PatternItem;
