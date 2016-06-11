var React = require('react');
var ReactDOM = require('react-dom');

var Motto = React.createClass({

  render: function () {
    return <section className={"motto " + this.props.mottoSpecs}><p>{this.props.motto}</p></section>;
  }

});

module.exports = Motto;
