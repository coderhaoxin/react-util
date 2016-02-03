
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

export function clear(ref) {
  ref = this.refs[ref]
  if (ref) {
    ref.value = ''
  }
}

/**
 * private
 */

function match(pattern, target) {
  if (!(pattern instanceof RegExp)) {
    pattern = new RegExp('^' + pattern)
  }

  return pattern.test(target)
}
