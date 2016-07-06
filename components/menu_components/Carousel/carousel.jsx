var React = require('react');
var ReactDOM = require('react-dom');

var Wrapper = require('./wrapper.jsx');

var Carousel = React.createClass({
  render: function () {
    return <div className="carousel group"><Wrapper elements={this.props.elements} category={this.props.category} background={this.props.background} handleClick={this.props.handleClick}/></div>
  }
});

module.exports = Carousel;
