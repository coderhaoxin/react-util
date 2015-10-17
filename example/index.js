
import { Component, render } from 'react'

import {
  allRefVals,
  clearAll,
  setRefs,
  refVal,
  focus,
  clear,

  Input
} from '..'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getAllRefVals() {
    console.log('all refs: %o', this::allRefVals())
  }

  getRefVal() {
    console.log('a is: %s', this::refVal('a'))
    this::refVal('not exist')
  }

  setRefs() {
    this::setRefs({
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    })
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
        <section>
          <input type='text' ref='a' />
          <input type='text' ref='b' />
          <input type='text' ref='c' />
          <input type='text' ref='d' />
          <input type='text' ref='e-a' />
          <input type='text' ref='e_b' />

          <button onClick={this.getAllRefVals.bind(this)}>allRefVals</button>
          <button onClick={ () => { this::clearAll() } }>clearAll</button>
          <button onClick={this.getRefVal.bind(this)}>getRefVal a</button>
          <button onClick={this.focus.bind(this)}>focus d</button>
          <button onClick={this.clear.bind(this)}>clear a</button>

          <button onClick={this.setRefs.bind(this)}>setRefs</button>
        </section>

        <section>
          <Input type='number' defValFirst={true} defVal={this.state.defVal} onChange={ (v) => { console.info(v) } } />
          <Input type='number' defVal={this.state.defVal} onChange={ (v) => { console.info(v) } } />
          <button onClick={ () => { this.setState({ defVal: 0 }) } }>reset to 0</button>
          <button onClick={ () => { this.setState({ defVal: undefined }) } }>clear</button>
        </section>
      </div>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
