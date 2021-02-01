import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const counter = this.props.opacity - .1
    return counter < .1 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {<ColorBox opacity={this.props.opacity - .1} />}
      </div>
    )
  }

}

