var React = require('react');
var ReactDom = require('react-dom');

var PartitionItem = React.createClass({

  render: function () {
      return <li className={this.props.partition + this.props.active} onClick={this.props.setPartition}>{this.props.name}</li>
  }

});

module.exports = PartitionItem;
