import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(values) {
    super()
    this.state = {
      color: this.values
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

 
