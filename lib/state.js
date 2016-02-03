
/**
 * meta state
 */

const STATE_NAME = '__meta_state__'

const assign = Object.assign

export function clearsAll() {
  if (this.state && this.state[STATE_NAME]) {
    this.setState({
      [STATE_NAME]: {}
    })
  }
}

export function setsAll(obj) {
  if (!this.state) {
    return throwError('state not exists')
  }

  if (typeof obj !== 'object') {
    return throwError('invalid param for setsAll')
  }

  // clear all first ?
  this.setState({
    [STATE_NAME]: obj
  })
}

export function getsAll() {
  return this.state && this.state[STATE_NAME] || {}
}

export function sets(key, val) {
  if (!this.state) {
    return throwError('state not exists')
  }

  if (!this.state[STATE_NAME]) {
    this.setState({
      [STATE_NAME]: {}
    })
  }

  this.setState({
    [STATE_NAME]: assign({}, this.state[STATE_NAME], {
      [key]: val
    })
  })
}

export function gets(key) {
  const state = this::getsAll()
  return state[key]
}

/**
 * private
 */

function throwError(msg) {
  throw new TypeError(msg)
}
