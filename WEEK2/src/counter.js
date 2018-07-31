import React, { Component } from 'react';

export default class Counter extends Component {
    //uses js constructor function
    constructor() {
        super();
        this.state = {
            count: 0
        }
    
    }
    //method in class
    increment() {
        //react re-renders when setState() methos called
        this.setState({
            count: ++this.state.count
        });
    }
    decrement() {
        //react re-renders when setState() methos called
        this.setState({
            count: --this.state.count
        });
    }
    render() {
        return (
            <div>
                <button onClick={ this.increment.bind(this) }>Increment +</button>
                <p className="counter">Count: { this.state.count }</p>
                <button onClick={ this.decrement.bind(this) }>Decrement -</button>
            </div>
        )
    }
}