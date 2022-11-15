import React, { Component } from 'react'


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    plus = () => {
        this.setState({ count: this.state.count + 1 })
    };
    minus = () => {
        this.setState({ count: this.state.count > 0 ? this.state.count - 1 : this.state.count = 0 })
    }



    render() {
        return (
            <div>
                <button onClick={this.plus}> + </button>
                <button onClick={this.minus}> - </button>
                <h1> {this.state.count}</h1>
            </div>
        )
    }   
}
