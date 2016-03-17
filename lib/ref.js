
import { clear } from './util'

/**
 * Usage
 *   this::allRefVals()
 *
 * @return {Object}
 */

export function allRefVals() {
  const refs = this.refs
  const obj = {}

  Object.keys(refs).forEach(key => {
    const name = key.replace(/[_-][a-z]/ig, (s) => {
      return s.slice(1).toUpperCase()
    })

    obj[name] = this::refVal(key)
  })

  return obj
}

/**
 * Usage
 *   this::clearRefs()
 */

export function clearRefs() {
  Object.keys(this.refs).forEach(ref => {
    this::clear(ref)
  })
}

/**
 * Usage
 *
 *   this::setRef(obj)
 *
 * @param {Object} obj
 */

export function setRefs(obj) {
  Object.keys(obj).forEach(key => {
    this::refVal(key, obj[key])
  })
}

/**
 * Usage
 *
 *   this::refVal('some')
 *   this::refVal('some', 'value')
 *
 * @param {String} ref
 * @param {String} val (optional)
 *
 * @return {String}
 */

export function refVal(ref, val) {
  ref = this.refs[ref]

  if (!ref) {
    return ''
  }

  if (typeof val === 'undefined') {
    return ref.value || ''
  }

  ref.value = val
}

export function clearAll() {
  console.warn('use clearRefs()')
  Object.keys(this.refs).forEach(ref => {
    this::clear(ref)
  })
}
