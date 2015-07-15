'use strict'

/**
 * exports
 */

module.exports = {
  refVal: refVal,
  focus: focus,
  clear: clear
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
  if (typeof val === 'undefined') {
    return this.refs[ref].getDOMNode().value || ''
  }

  this.refs[ref].getDOMNode().value = val
}

/**
 * Usage
 *
 *   this::focus('some')
 *
 * @param {String} ref
 */
function focus(ref) {
  React.findDOMNode(this.refs[ref]).focus()
}

/**
 * Usage
 *
 *   this::clear('some')
 *
 * @param {String} ref
 */
function clear(ref) {
  this.refs[ref].getDOMNode().value = ''
}
