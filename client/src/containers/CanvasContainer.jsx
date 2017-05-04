import React, { Component } from 'react'
import CanvasWrapper from '../components/CanvasWrapper'
import io from 'socket.io-client'

class CanvasContainer extends Component {

  constructor(props) {
    super(props)

    this.context = null

    this.draw = this.draw.bind(this)
    this.setContext = this.setContext.bind(this)
    
    this.socket = io('http://localhost:3000/')
    this.socket.on('draw', (coords) => {
      this.draw.call(this, coords)
    })
  }

  setContext(context) {
    this.context = context
  }

  draw(coords, shouldEmit) {
    this.context.fillRect(coords.x, coords.y, 10, 10)
    if (shouldEmit) this.socket.emit('draw', coords)
  }

  render() {
    return (
      <div>
        <CanvasWrapper
          setContext={ this.setContext }
          draw={ this.draw }/>
      </div>
    )
  }

}

export default CanvasContainer
