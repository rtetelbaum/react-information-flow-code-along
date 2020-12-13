import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

	clickHandler = () => {this.props.handleColorChange(getRandomColor())}

  render() {
    return (
      <div
        className="child"
				style={{backgroundColor: this.props.color}}
				onClick={this.clickHandler}
      ></div>
    )
  }
}

export default Child
