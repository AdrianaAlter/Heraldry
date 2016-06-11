var React = require('react');
var ReactDOM = require('react-dom');

var Ordinary = React.createClass({

  render: function () {
    return <section className={"ordinary " + this.props.ordinary}></section>;
  }

});

module.exports = Ordinary;
