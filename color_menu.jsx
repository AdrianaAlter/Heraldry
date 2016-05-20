var React = require('react');
var ReactDOM = require('react-dom');
var Shield = require('./shield.jsx');

var ColorMenu = React.createClass({
  getInitialState: function () {
      return { color: "", partition: "", partitionColor: "", ordinaries: "", ordinariesColor: "", icons: "" };
  },

  changeGules: function () {
    this.setState({ color: "gules" })
  },
  ordinaryGules: function () {
    this.setState({ ordinariesColor: "gules" });
  },
  partGules: function () {
    this.setState({ partitionColor: "gules" });
  },

  changeAzure: function () {
    this.setState({ color: "azure" });
  },
  ordinaryAzure: function () {
    this.setState({ ordinariesColor: "azure" });
  },
  partAzure: function () {
    this.setState({ partitionColor: "azure" });
  },

  changeVert: function () {
    this.setState({ color: "vert" });
  },
  ordinaryVert: function () {
    this.setState({ ordinariesColor: "vert" });
  },
  partVert: function () {
    this.setState({ partitionColor: "vert" });
  },

  changePurpure: function () {
    this.setState({ color: "purpure" });
  },
  ordinaryPurpure: function () {
    this.setState({ ordinariesColor: "purpure" });
  },
  partPurpure: function () {
    this.setState({ partitionColor: "purpure" });
  },

  changeSable: function () {
    this.setState({ color: "sable" });
  },
  ordinarySable: function () {
    this.setState({ ordinariesColor: "sable" });
  },
  partSable: function () {
    this.setState({ partitionColor: "sable" });
  },

  changeArgent: function () {
    this.setState({ color: "argent" })
  },
  ordinaryArgent: function () {
    this.setState({ ordinariesColor: "argent" });
  },
  partArgent: function () {
    this.setState({ partitionColor: "argent" });
  },

  changeOr: function () {
    this.setState({ color: "or" })
  },
  ordinaryOr: function () {
    this.setState({ ordinariesColor: "or" })
  },
  partOr: function () {
    this.setState({ partitionColor: "or" })
  },

  partitionPerFess: function () {
    this.setState({ partition: "per-fess"});
  },
  partitionPerPale: function () {
    this.setState({ partition: "per-pale"});
  },
  partitionPerChevron: function () {
    this.setState({ partition: "per-chevron"});
  },
  partitionPerQuarter: function () {
    this.setState({ partition: "per-quarter"});
  },


  changeHorizontal: function () {
    this.setState({ ordinaries: "fess" })
  },

  changeVertical: function () {
    this.setState({ ordinaries: "pale" })
  },

  changeTriangle: function () {
    this.setState({ ordinaries: "pile" })
  },

  changeDiagonal: function () {
    this.setState({ ordinaries: "bend" })
  },

  changeChief: function () {
    this.setState({ ordinaries: "chief" })
  },

  changeCanton: function () {
    this.setState({ ordinaries: "canton" })
  },

  changeLozenge: function () {
    this.setState({ ordinaries: "lozenge" })
  },

  changeBase: function () {
    this.setState({ ordinaries: "base" })
  },

  changeFleur: function () {
    this.setState({ icons: "fleur" })
  },

  changeLion: function () {
    this.setState({ icons: "lion passant" })
  },

  changeEagle: function () {
    this.setState({ icons: "eagle" })
  },

  changeRose: function () {
    this.setState({ icons: "rose" })
  },

  changeUnicorn: function () {
    this.setState({ icons: "unicorn" })
  },

  changeBow: function () {
    this.setState({ icons: "bow" })
  },

  changeGate: function () {
    this.setState({ icons: "gate" })
  },

  render: function () {
    var mainColor = this.state.color.length > 0 ? this.state.color : "";
    var ordinary = this.state.ordinaries.length > 0 ? ", a " + this.state.ordinaries : "";
    var ordinaryColor = this.state.ordinaries.length > 0 ? " " + this.state.ordinariesColor : "";
    var icon = this.state.icons.length > 0 ? ", " + this.state.icons : "";

    return(
      <div>
        <h1>{mainColor}{ordinary}{ordinaryColor}{icon}</h1>
        <ul className="color-menu">Main
          <li className="gules" onClick={this.changeGules}></li>
          <li className="azure" onClick={this.changeAzure}></li>
          <li className="vert" onClick={this.changeVert}></li>
          <li className="purpure" onClick={this.changePurpure}></li>
          <li className="sable" onClick={this.changeSable}></li>
          <li className="argent" onClick={this.changeArgent}></li>
          <li className="or" onClick={this.changeOr}></li>
        </ul>
        <ul className="partitions-menu">Partition
          <li onClick={this.partitionPerFess}>Per Fess</li>
          <li onClick={this.partitionPerPale}>Per Pale</li>
          <li onClick={this.partitionPerChevron}>Per Chevron</li>
          <li onClick={this.partitionPerQuarter}>Quarterly</li>
        </ul>
        <ul className="color-menu">Partition Color
          <li className="gules" onClick={this.partGules}></li>
          <li className="azure" onClick={this.partAzure}></li>
          <li className="vert" onClick={this.partVert}></li>
          <li className="purpure" onClick={this.partPurpure}></li>
          <li className="sable" onClick={this.partSable}></li>
          <li className="argent" onClick={this.partArgent}></li>
          <li className="or" onClick={this.partOr}></li>
        </ul>
        <ul className="ordinaries-menu">Ordinary
          <li className="horizontal-opt" onClick={this.changeHorizontal}>Fess</li>
          <li className="vertical-opt" onClick={this.changeVertical}>Pale</li>
          <li className="chief-opt" onClick={this.changeChief}>Chief</li>
          <li className="diagonal-opt" onClick={this.changeDiagonal}>Bend</li>
          <li className="canton-opt" onClick={this.changeCanton}>Canton</li>
          <li className="lozenge-opt" onClick={this.changeLozenge}>Lozenge</li>
          <li className="base-opt" onClick={this.changeBase}>Base</li>
        </ul>
        <ul className="ordinaries-color">Secondary
          <li className="gules" onClick={this.ordinaryGules}></li>
          <li className="azure" onClick={this.ordinaryAzure}></li>
          <li className="vert" onClick={this.ordinaryVert}></li>
          <li className="purpure" onClick={this.ordinaryPurpure}></li>
          <li className="sable" onClick={this.ordinarySable}></li>
          <li className="argent" onClick={this.ordinaryArgent}></li>
          <li className="or" onClick={this.ordinaryOr}></li>
        </ul>
        <ul className="icons-menu">Charge
          <li className="fleur" onClick={this.changeFleur}></li>
          <li className="lion" onClick={this.changeLion}></li>
          <li className="eagle" onClick={this.changeEagle}></li>
          <li className="rose" onClick={this.changeRose}></li>
          <li className="unicorn" onClick={this.changeUnicorn}></li>
          <li className="bow" onClick={this.changeBow}></li>
          <li className="gate" onClick={this.changeGate}></li>
        </ul>
        <section className={"shield " + this.state.color}>
          <section className={"partition " + this.state.partition + " " + this.state.partitionColor}></section>
          <section className={"ordinary " + this.state.ordinaries + " " + this.state.ordinariesColor}></section>
          <section className={"icon " + this.state.icons}></section>
        </section>
      </div>
    )

  }
});

module.exports = ColorMenu;
