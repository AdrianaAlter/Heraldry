var React = require('react');
var ReactDOM = require('react-dom');

var Buttons = React.createClass ({

  render: function () {

    // var handleClick2 = this.props.leftLeft == 0 ? null : this.props.slideBack
    // var click = this.props.slide;
    // var text = this.props.done ? "TRUE" : "FALSE";
    return <section>
            <button onClick={this.props.slide}></button>
            <button onClick={this.props.slideBack}></button>
          </section>
  }

});

module.exports = Buttons;
