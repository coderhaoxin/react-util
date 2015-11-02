
import { Component, PropTypes } from 'react'

function noop() {}

class Input extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const {
      onChange = noop,
      value
    } = this.props

    return (
      <input {...this.props} value={value}
        onChange={ (e) => { onChange(e.target.value, e) } } />
    )
  }
}

export {
  Input
}
