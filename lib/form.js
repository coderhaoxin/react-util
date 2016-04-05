
import { Component, PropTypes } from 'react'

function noop() {}

export class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render() {
    const {
      onChange = noop,
      value
    } = this.props

    return (
      <input {...this.props} value={value}
        onChange={e => onChange(e.target.value, e)} />
    )
  }
}

export class Textarea extends Component {
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
      <textarea {...this.props} value={value}
        onChange={e => onChange(e.target.value, e)} />
    )
  }
}

export class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  render() {
    const {
      onChange = noop,
      checked
    } = this.props

    return (
      <input type='checkbox' checked={checked}
        onChange={e => onChange(e.target.checked, e)} />
    )
  }
}

export class Radio extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  render() {
    const {
      onChange = noop,
      checked
    } = this.props

    return (
      <input type='radio' checked={checked}
        onChange={e => onChange(e.target.checked, e)} />
    )
  }
}
