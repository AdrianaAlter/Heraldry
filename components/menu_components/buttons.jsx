var React = require('react');
var ReactDOM = require('react-dom');
var Randomizer = require('./randomizer.jsx');
var Resetter = require('./resetter.jsx');

var Buttons = React.createClass({

  render: function () {
    return <ul className="main-menu group">
              <Randomizer randomize={this.props.randomize} />
              <Resetter reset={this.props.reset} />
           </ul>
  }

});

module.exports = Buttons;
