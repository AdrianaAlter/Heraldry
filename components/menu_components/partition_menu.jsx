var React = require('react');
var ReactDOM = require('react-dom');

PARTITIONS = require('../../constants/partition_constants.js');
var PartitionItem = require('./partition_item.jsx');

var PartitionMenu = React.createClass({

  render: function () {
    var self = this;
    var partitionLis = PARTITIONS.map(function(partition) {
      var active = partition == self.props.selected ? " active" : "";
      return <PartitionItem partition={partition + "-opt"} active={active} key={PARTITIONS.indexOf(partition)} name={partition} setPartition={self.props.setPartition} />
    });
    return <ul className="partitions-menu group">{partitionLis}</ul>;
  }

});

module.exports = PartitionMenu;

  // var active = partition == self.state.partition ? " active" : "";
