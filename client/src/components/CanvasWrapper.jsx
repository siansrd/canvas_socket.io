import React, { Component } from 'react'

class CanvasWrapper extends Component {

  constructor(props) {
    super(props)
    this.canvas = null
    this.handleCanvasClick = this.handleCanvasClick.bind(this)
  }

  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    
    const coords = { 
      x: (event.clientX - rect.left),
      y: (event.clientY - rect.top)
    }

    this.props.draw(coords, true)
  }

  componentDidMount() {
    this.canvas = document.querySelector('canvas')
    this.props.setContext(this.canvas.getContext('2d'))
  }

  render() {
    this.canvas = <canvas
                    width="500"
                    height="400"
                    onClick={ this.handleCanvasClick } />

    return (
      <div>
        { this.canvas }
      </div>
    )
  }

}

export default CanvasWrapper
