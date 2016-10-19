var React = require('react');
var ReactDOM = require('react-dom');
PARTITIONS = require('../../constants/partition_constants.js');
var PartitionItem = require('./partition_item.jsx');
var Carousel = require('./Carousel/carousel.jsx');

var PartitionMenu = React.createClass({

  render: function () {
    return <Carousel elements={PARTITIONS} category="text" handleClick={this.props.setPartition} />
  }

});

module.exports = PartitionMenu;
