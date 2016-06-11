var React = require('react');
var ReactDOM = require('react-dom');

var Resetter = React.createClass({

  render: function () {
    return <li onClick={this.props.reset}>RESET</li>;
  }

});

module.exports = Resetter;
