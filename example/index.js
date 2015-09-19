
import { allRefVals, refVal, focus, clear } from '..'
import { Component, render } from 'react'

class App extends Component {
  getAllRefVals() {
    console.log('all refs: %o', this::allRefVals())
  }

  getRefVal() {
    console.log('a is: %s', this::refVal('a'))
    this::refVal('not exist')
  }

  focus() {
    console.info('focus d')
    this::focus('d')
    this::focus('not exist')
  }

  clear() {
    console.info('clear a')
    this::clear('a')
    this::clear('not exist')
  }

  render() {
    return (
      <div>
        <input type='text' ref='a' />
        <input type='text' ref='b' />
        <input type='text' ref='c' />
        <input type='text' ref='d' />
        <input type='text' ref='H_i' />

        <button onClick={this.getAllRefVals.bind(this)}>allRefVals</button>
        <button onClick={this.getRefVal.bind(this)}>getRefVal a</button>
        <button onClick={this.focus.bind(this)}>focus d</button>
        <button onClick={this.clear.bind(this)}>clear a</button>
      </div>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
