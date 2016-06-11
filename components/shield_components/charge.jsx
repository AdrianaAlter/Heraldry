var React = require('react');
var ReactDOM = require('react-dom');

var Charge = React.createClass({

  render: function () {
    return <section className={this.props.charge}></section>;
  }

});

module.exports = Charge;
