var React = require('react');
var ReactDOM = require('react-dom');
var Shield = require('./shield.jsx');
var ColorMenu = require('./color_menu.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <ColorMenu />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('main'));
});
