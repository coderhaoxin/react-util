
/**
 * meta state
 */

const prefix = '__meta_state__'

export function clearsAll() {
  Object.keys(this.state).forEach(key => {
    if (key.startsWith(prefix)) {
      this.setState({
        [key]: ''
      })
    }
  })
}

export function setsAll(obj) {
  Object.keys(obj).forEach(key => {
    this::sets(key, obj[key])
  })
}

export function getsAll() {
  const result = {}

  Object.keys(this.state).forEach(key => {
    if (key.startsWith(prefix)) {
      const newKey = key
        .replace(prefix, '')
        .replace(/[_-][a-z]/ig, (s) => {
          console.warn('warn: will remove replace /[_-][a-z]/ig')
          return s.slice(1).toUpperCase()
        })

      result[newKey] = this.state[key]
    }
  })

  return result
}

export function sets(key, val) {
  this.setState({
    [prefix + key]: val
  })
}

export function gets(key) {
  return this.state[prefix + key]
}

/**
 * private
 */

function throwError(msg) {
  throw new TypeError(msg)
}
