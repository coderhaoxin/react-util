'use strict'

/**
 * Usage
 *   this::allRefVals()
 *
 * @return {Object}
 */
function allRefVals() {
  const refs = this.refs
  const obj = {}

  Object.keys(refs).forEach((key) => {
    let name = key.replace(/[_][a-z]/ig, (s) => {
      return s.slice(1).toUpperCase()
    })

    obj[name] = this::refVal(key)
  })

  return obj
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
function refVal(ref, val) {
  ref = this.refs[ref]

  if (!ref) {
    return ''
  }

  if (typeof val === 'undefined') {
    return ref.getDOMNode().value || ''
  }

  ref.getDOMNode().value = val
}

/**
 * Usage
 *
 *   this::focus('some')
 *
 * @param {String} ref
 */
function focus(ref) {
  ref = this.refs[ref]
  if (ref) {
    React.findDOMNode(ref).focus()
  }
}

/**
 * Usage
 *
 *   this::clear('some')
 *
 * @param {String} ref
 */
function clear(ref) {
  ref = this.refs[ref]
  if (ref) {
    ref.getDOMNode().value = ''
  }
}

/**
 * export
 */

export {
  allRefVals,
  refVal,
  focus,
  clear
}
