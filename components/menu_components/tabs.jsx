var React = require('react');
var ReactDOM = require('react-dom');
TABS = require('../../constants/tab_constants.js');
var TabItem = require('./tab_item.jsx');

var Tabs = React.createClass({

  render: function () {

    var self = this;

    var tabLis = TABS.map(function(tab) {
      var active = tab == self.props.selected ? " active" : "";
      return <TabItem
              tab={tab}
              active={active}
              key={TABS.indexOf(tab)}
              setTab={self.props.setTab}
             />;
    });

    return <ul className="tabs group">{tabLis}</ul>;
  }

});

module.exports = Tabs;
