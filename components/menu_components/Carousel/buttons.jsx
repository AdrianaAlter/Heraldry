var React = require('react');
var ReactDOM = require('react-dom');

var Buttons = React.createClass ({

  render: function () {

    return <section>
            <button onClick={this.props.slide}></button>
            <button onClick={this.props.slideBack}></button>
          </section>
  }

});

module.exports = Buttons;
