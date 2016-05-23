
import { Component, PropTypes } from 'react'

class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    optLabel: PropTypes.string,
    optValue: PropTypes.string
  }

  static defaultProps = {
    optLabel: 'label',
    optValue: 'value'
  }

  onChange(e) {
    const {
      optValue,
      onChange,
      options,
    } = this.props

    const v = e.target.value

    const opt = options.filter(o => String(o[optValue]) === v)[0]

    onChange(opt)
  }

  render() {
    const {
      optLabel,
      optValue,
      options,
      value,
    } = this.props
    // fix: Select value not exist
    let valueNotExists = true
    for (let i = 0; i < options.length; i++) {
      if (String(options[i][optValue]) === String(value)) {
        valueNotExists = false
        break
      }
    }

    return (
      <select onChange={::this.onChange} value={String(value)}>
      {
        valueNotExists && (
          <option key={-1} value={String(value)} />
        )
      }

      {
        options.map((o, i) => (
          <option key={i} value={String(o[optValue])}>
            {o[optLabel]}
          </option>
        ))
      }
      </select>
    )
  }
}

export default Select
