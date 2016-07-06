var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');
var Buttons = require('./buttons.jsx');
var Dots = require('./dots.jsx');

var Wrapper = React.createClass({
  getInitialState: function () {
      return { leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4, active: 0, background: "" };
  },

  componentDidMount: function () {
      this.props.elements.length == 5 ? this.setState({ over: true }) : this.setState({ over: false});
  },

  slide: function () {

    var limit = this.props.elements.length - 3;
    if (this.state.center == limit) {
      this.loop();
    }
    else {
      var newCenter = (this.state.center + 1);
      var newLeftLeft = (newCenter - 2);
      var newLeft = (newCenter - 1);
      var newRight = newCenter + 1;
      var newRightRight = newCenter + 2;
      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
    };

  },

  loop: function () {
    this.setState({rightRight: (this.state.rightRight + 1 - this.props.elements.length), right: (this.state.rightRight), center: (this.state.right), left: (this.state.center), leftLeft: (this.state.left)});
  },

  loopBack: function () {
    var newLeftLeft = this.props.elements.length - 1;
    var newLeft = newLeftLeft - 1;
    var newCenter = newLeftLeft + 1;
    this.setState({rightRight: this.state.right, right: (this.state.center), center: newCenter, left: newLeft, leftLeft: newLeftLeft });
  },

  slideBack: function () {
    if (this.state.center == 2) {
        this.loopBack();
    }
    else {
      var newCenter = (this.state.center - 1);
      var newLeftLeft = (newCenter - 2);
      var newLeft = (newCenter - 1);
      var newRight = (newCenter + 1);
      var newRightRight = (newCenter + 2);
      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
    };
  },

  isOver: function () {

    this.setState({ over: true, leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4 });
  },

  bringCenter: function (e) {
    var newItem;
    var newCenter;
    if (e.currentTarget.textContent.length > 1) {
      newItem = e.currentTarget.textContent;
    }
    else {
      var broken = e.currentTarget.className.split(" ");
      if (broken.join().split("-").includes("opt")) {
        var first = broken.join().split("-")[0].split(",");
        if (this.props.elements.includes(first)) {
          newItem = first.slice(0, first.length - 1);
        }
        else {
          var last = broken[broken.length - 1].split("-");
          newItem = last.slice(0, last.length - 1).join("-");
        }
      }
      else {
        newItem = broken[broken.length - 2];
      }
    };
    newCenter = this.props.elements.indexOf(newItem);

    if (newCenter - 2 < 0) {
      newCenter = (this.props.elements.length + Math.abs(newCenter));
    };
      this.setState({ center: newCenter, left: newCenter - 1, leftLeft: newCenter - 2, right: newCenter + 1, rightRight: newCenter + 2 });
  },

  activate: function (e) {
    var newItem;
    var activeIdx;
    if (e.currentTarget.textContent.length > 1) {
      newItem = e.currentTarget.textContent;
    }
    else {
      var broken = e.currentTarget.className.split(" ");
      if (broken.join().split("-").includes("opt")) {
        var first = broken.join().split("-")[0].split(",");
        if (this.props.elements.includes(first)) {
          newItem = first.slice(0, first.length - 1);
        }
        else {
          var last = broken[broken.length - 1].split("-");
          newItem = last.slice(0, last.length - 1).join("-");
        }
      }
      else {
        newItem = broken[broken.length - 2];
      }
    };

    activeIdx = this.props.elements.indexOf(newItem);
    this.setState({ active: activeIdx });
  },

  setBG: function (e) {
    var bg = e.currentTarget.className.split(" ")[2];
    this.setState({ background: bg });
  },

  handleClick: function (e) {
    this.activate(e);
    this.bringCenter(e);
    this.props.handleClick(e);
  },

  render: function () {


    return <div className={"wrapper group " + this.state.background}>
              <h1>Active: {this.state.active} LeftLeft: {this.state.leftLeft} Left: {this.state.left} Center: {this.state.center} Right: {this.state.right} RightRight: {this.state.rightRight}</h1>
              <List handleClick={this.handleClick} category={this.props.category} background={this.props.background} activeIdx={this.state.active} elements={this.props.elements} leftLeft={this.state.leftLeft} left={this.state.left} center={this.state.center} right={this.state.right} rightRight={this.state.rightRight} />
              <Buttons first={this.props.leftLeft} done={this.state.over} isOver={this.props.isOver} slide={this.slide} slideBack={this.slideBack} />
              <Dots elements={this.props.elements} handleClick={this.handleClick} active={this.state.active}/>
            </div>
  }

});

module.exports = Wrapper;
