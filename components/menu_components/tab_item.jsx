var React = require('react');
var ReactDOM = require('react-dom');

var TabItem = React.createClass({

  render: function () {

    return <li className={this.props.tab + "-tab" + this.props.active}
               onClick={this.props.setTab}>
               {this.props.tab.split("-")[0]}
           </li>;

  }


});

module.exports = TabItem;
