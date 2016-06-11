var React = require('react');
var ReactDom = require('react-dom');

var OrdinaryItem = React.createClass({

  render: function () {
    return <li className={this.props.ordinary + this.props.active} onClick={this.props.setOrdinary}>{this.props.name}</li>
  }

});

module.exports = OrdinaryItem;
