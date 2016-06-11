var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.jsx');
var Menu = require('./menu_components/menu.jsx');

// var Shield = require('./shield_components/shield.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <Menu />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('main'));
});
