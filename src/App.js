import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {show: true };
  }
  toggle=()=>{
    this.setState({ show: ! this.state.show })

  }

  render()  {
    
    return (
      <div>
        <button onClick={this.toggle} > toggle </button>
        
        { this.state.show? <Counter/> : null }
      </div>
    )
  }
}
