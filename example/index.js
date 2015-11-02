
import { render } from 'react-dom'
import { Component } from 'react'

import {
  uncheckedVals,
  checkedVals,
  uncheckRefs,
  checkRefs,
  uncheck,
  check,

  allRefVals,
  clearRefs,
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
      <article>
        <section>
          <input type='text' ref='a' />
          <input type='text' ref='b' />
          <input type='text' ref='c' />
          <input type='text' ref='d' />
          <input type='text' ref='e-a' />
          <input type='text' ref='e_b' />

          <button onClick={::this.getAllRefVals}>allRefVals</button>
          <button onClick={ () => { this::clearRefs() } }>clearRefs</button>
          <button onClick={::this.getRefVal}>getRefVal a</button>
          <button onClick={::this.focus}>focus d</button>
          <button onClick={::this.clear}>clear a</button>

          <button onClick={::this.setRefs}>setRefs</button>
        </section>

        <section>
          <Input type='number' value={this.state.inputValue}
            onChange={ (v) => { this.setState({ inputValue: v }) } } />
        </section>

        <section>
          <input type='checkbox' ref='c-a' />
          <input type='checkbox' ref='c-b' />
          <input type='checkbox' ref='c-c' />
        </section>

        <section>
          <button onClick={ () => { console.log(this::uncheckedVals('c')) } }>uncheckedVals</button>
          <button onClick={ () => { console.log(this::checkedVals('c')) } }>checkedVals</button>
          <button onClick={ () => { this::uncheckRefs('c') } }>uncheckRefs</button>
          <button onClick={ () => { this::checkRefs('c') } }>checkRefs</button>
          <button onClick={ () => { this::uncheck('c-a') } }>uncheck</button>
          <button onClick={ () => { this::check('c-a') } }>check</button>
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}
