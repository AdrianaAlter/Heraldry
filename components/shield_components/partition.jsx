var React = require('react');
var ReactDOM = require('react-dom');

var Partition = React.createClass({

  render: function () {
    return <section className={"partition " + this.props.partition}></section>;
  }

});

module.exports = Partition;
