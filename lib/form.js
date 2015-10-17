
import { Component, PropTypes } from 'react'

function noop() {}

class Input extends Component {
  static propTypes = {
    defVal: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    defValFirst: PropTypes.bool,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(props) {
    if (props.defVal !== this.props.defVal && this.props.defValFirst) {
      this.setState({
        value: props.defVal
      })
    }
  }

  render() {
    const {
      onChange = noop,
      defValFirst,
      defVal
    } = this.props

    return (<input {...this.props} value={this.state.value || defVal}
      onChange={
        (e) => {
          const value = e.target.value
          this.setState({
            value
          })
          onChange(value, e)
        }
      } />)
  }
}

export {
  Input
}
