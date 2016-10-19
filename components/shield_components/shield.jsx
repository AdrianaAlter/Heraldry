var React = require('react');
var ReactDOM = require('react-dom');

var Partition = require('./partition.jsx');
var Ordinary = require('./ordinary.jsx');
var Charge = require('./charge.jsx');
var Motto = require('./motto.jsx');

var Shield = React.createClass({

  render: function () {

    return(
    <div className={"shield-div group " + this.props.background}>
        <div className="inner group">
              <section className={"shield " + this.props.color + " " + this.props.pattern}>
                <Partition partition={"partition " + this.props.partition + " " + this.props.partitionPattern} />
                <Ordinary ordinary={"ordinary " + this.props.ordinary + " " + this.props.ordinariesPattern} />
                <Charge charge={this.props.charge} />
              </section>
              <Motto mottoSpecs={this.props.mottoSpecs} motto={this.props.motto} />
        </div>
    </div>
    )

  }
});

module.exports = Shield;
