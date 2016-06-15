
import { findDOMNode } from 'react-dom'

/**
 * Usage
 *
 *   this::focus('some')
 *
 * @param {String} ref
 */

export function focus(ref) {
  ref = this.refs[ref]
  if (ref) {
    findDOMNode(ref).focus()
  }
}

/**
 * Usage
 *
 *   this::clear('some')
 *
 * @param {String} ref
 */

export function clear(ref) {
  ref = this.refs[ref]
  if (ref) {
    ref.value = ''
  }
}
