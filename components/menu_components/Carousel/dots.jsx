var React = require('react');
var ReactDOM = require('react-dom');

var Dots = React.createClass({
  getInitialState: function () {
    return { activeIdx: 0 };
  },

  componentDidMount: function () {
    this.setState({ activeIdx: this.props.active })
  },

  render: function () {
    var self = this;
    var dotLis = this.props.elements.map(function(element) {
      var idx = self.props.elements.indexOf(element);

      var active = self.state.activeIdx == idx ? " dot-active " : " inactive ";

      return <li className={active + " dot " + ", " + element + "-opt"} key={self.props.elements.indexOf(element)} onClick={self.props.handleClick}></li>
    });

    return <ul className="dots">{dotLis}</ul>

  }

});


module.exports = Dots;
