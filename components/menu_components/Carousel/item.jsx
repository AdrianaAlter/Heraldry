var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({

  render: function () {
    var className = this.props.category == "picture" ? this.props.status + this.props.active + this.props.content : this.props.status + this.props.active + this.props.content + "-opt";
    var content = this.props.category == "text" ? this.props.content : "";
    var click = this.props.handleClick;
    
    return <li onClick={click} className={className + " " + this.props.background}>{content}</li>
  }

});

module.exports = Item;
