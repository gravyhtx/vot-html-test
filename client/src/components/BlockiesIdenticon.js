// Usage:
//   npm install blockies-identicon
//   const Blockies = require("blockies/react-component");
//   <Blockies opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}}/>
import React from 'react';
import blockies from './modules/blockies';

class BlockiesIdenticon extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  getOpts () {
    return {
      seed: this.props.opts.seed || "foo",
      color: this.props.opts.color || "#11111190",
      bgcolor: this.props.opts.bgcolor || "#3b495490",
      size: this.props.opts.size || 10,
      scale: this.props.opts.scale || 5,
      spotcolor: this.props.opts.spotcolor || "#7FCCE490"
    };
  }
  componentDidMount() {
    this.draw();
  }
  draw() {
    blockies.render(this.getOpts(), this.canvas);
  }
  render() {
    return <canvas ref={canvas => this.canvas = canvas}/>;
  }
}

export default BlockiesIdenticon;
