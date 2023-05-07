import React, {Component} from "react"
import "./App.css"
import { Button } from "./Components/Button"
import { Input } from "./Components/Input"
import { ClearButton } from "./Components/ClearButton"
import * as math from 'mathjs'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
  }

  AddToInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }


  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.AddToInput}>7</Button>
            <Button handleClick={this.AddToInput}>8</Button>
            <Button handleClick={this.AddToInput}>9</Button>
            <Button handleClick={this.AddToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.AddToInput}>4</Button>
            <Button handleClick={this.AddToInput}>5</Button>
            <Button handleClick={this.AddToInput}>6</Button>
            <Button handleClick={this.AddToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.AddToInput}>1</Button>
            <Button handleClick={this.AddToInput}>2</Button>
            <Button handleClick={this.AddToInput}>3</Button>
            <Button handleClick={this.AddToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.AddToInput}>.</Button>
            <Button handleClick={this.AddToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.AddToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;