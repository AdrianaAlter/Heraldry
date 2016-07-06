var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./item.jsx');


var List = React.createClass({

  render: function () {

    var self = this;
    ARRAY = this.props.elements;

    var items = ARRAY.map(function(item) {

      var key = ARRAY.indexOf(item);

      var isActive = self.props.activeIdx  == key ? " active " : " inactive ";
      var isLeftLeft = self.props.leftLeft % ARRAY.length == key ? true : false;
      var isLeft = self.props.left % ARRAY.length == key ? true : false;
      var isCenter = self.props.center % ARRAY.length == key ? true : false;
      var isRight = self.props.right % ARRAY.length == key ? true : false;
      var isRightRight = self.props.rightRight % ARRAY.length == key ? true : false;

      var isShowing = (isLeftLeft || isLeft || isCenter || isRight || isRightRight) ? "" : "hidden";

      var position;

      if (isLeftLeft) {
        position = "left-left";
      }
      else if (isLeft) {
        position = "left";
      }
      else if (isCenter) {
        position = "center";
      }
      else if (isRight) {
        position = "right";
      }
      else if (isRightRight) {
        position = "right-right";
      }
      else { position = "" };

      return <Item handleClick={self.props.handleClick} category={self.props.category} background={self.props.background} content={item} key={key} active={isActive} status={isShowing + position} activate={self.activate} />;
    });

    return <ul className="list group">{items}</ul>;

  }

});

module.exports = List;
