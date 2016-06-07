var React = require('react');
var ReactDom = require('react-dom');

var ChargeItem = React.createClass({

  render: function () {
    return <li className={this.props.charge + this.props.activity} onClick={this.props.setCharge}></li>
  }

});

module.exports = ChargeItem;
