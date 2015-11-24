
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

export {
  uncheckedVals,
  checkedVals,
  uncheckRefs,
  checkRefs,
  uncheck,
  check,
}
