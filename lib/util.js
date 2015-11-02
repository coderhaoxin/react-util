
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
    let name = key.replace(/[_-][a-z]/ig, (s) => {
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

function clearRefs() {
  Object.keys(this.refs).forEach((ref) => {
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

function setRefs(obj) {
  Object.keys(obj).forEach((key) => {
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

function refVal(ref, val) {
  ref = this.refs[ref]

  if (!ref) {
    return ''
  }

  if (typeof val === 'undefined') {
    return ref.value || ''
  }

  ref.value = val
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
    ref.value = ''
  }
}

/**
 * meta state
 */

const STATE_NAME = '__meta_state__'

function clearsAll() {
  if (this.state && this.state[STATE_NAME]) {
    this.setState({
      [STATE_NAME]: {}
    })
  }
}

function setsAll(obj) {
  if (!this.state) {
    return throwError('state not exists')
  }

  if (typeof obj !== 'object') {
    return throwError('invalid param for setsAll')
  }

  // clear all ?
  this.setState({
    [STATE_NAME]: obj
  })
}

function getsAll() {
  return this.state && this.state[STATE_NAME] || {}
}

function sets(key, val) {
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

function gets(key) {
  const state = this::getsAll()
  return state[key]
}

/**
 * check
 */

function uncheckedVals(pattern) {
  const vals = []

  Object.keys(this.refs).forEach((ref) => {
    const dom = this.refs[ref]
    if (match(pattern, ref) && dom.checked === false) {
      vals.push(dom.value)
    }
  })

  return vals
}

function checkedVals(pattern) {
  const vals = []

  Object.keys(this.refs).forEach((ref) => {
    const dom = this.refs[ref]
    if (match(pattern, ref) && dom.checked) {
      vals.push(dom.value)
    }
  })

  return vals
}

function uncheckRefs(pattern) {
  Object.keys(this.refs).forEach((ref) => {
    if (match(pattern, ref)) {
      this.refs[ref].checked = false
    }
  })
}

function checkRefs(pattern) {
  Object.keys(this.refs).forEach((ref) => {
    if (match(pattern, ref)) {
      this.refs[ref].checked = true
    }
  })
}

function uncheck(ref) {
  const dom = this.refs[ref]
  if (dom) {
    dom.checked = false
  }
}

function check() {
  const dom = this.refs[ref]
  if (dom) {
    dom.checked = true
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

function throwError(msg) {
  throw new TypeError(msg)
}

/**
 * export
 */

function clearAll() {
  console.warn('use clearRefs()')
  Object.keys(this.refs).forEach((ref) => {
    this::clear(ref)
  })
}

export {
  uncheckedVals,
  checkedVals,
  uncheckRefs,
  checkRefs,
  uncheck,
  check,

  allRefVals,
  clearRefs,
  clearAll,
  setRefs,
  refVal,
  focus,
  clear
}
