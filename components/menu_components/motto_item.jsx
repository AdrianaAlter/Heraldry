var React = require('react');
var ReactDom = require('react-dom');

var MottoItem = React.createClass({

  render: function () {
    return <li className={this.props.motto} onClick={this.props.setMottoBackground}></li>
  }

});

module.exports = MottoItem;
