var React = require('react');
var ReactDOM = require('react-dom');

var Randomizer = React.createClass({

  render: function () {
    return <li onClick={this.props.randomize}>RANDOM</li>;
  }
  
});

module.exports = Randomizer;
