var React = require('react');
var ReactDom = require('react-dom');

var BackgroundItem = React.createClass({
  
  render: function () {
    return <li className={this.props.background} onClick={this.props.setBackground}></li>
  }

});

module.exports = BackgroundItem;
