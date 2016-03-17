
/**
 * check
 */

export function uncheckedVals(pattern) {
  const vals = []

  Object.keys(this.refs).forEach(ref => {
    const dom = this.refs[ref]
    if (match(pattern, ref) && dom.checked === false) {
      vals.push(dom.value)
    }
  })

  return vals
}

export function checkedVals(pattern) {
  const vals = []

  Object.keys(this.refs).forEach(ref => {
    const dom = this.refs[ref]
    if (match(pattern, ref) && dom.checked) {
      vals.push(dom.value)
    }
  })

  return vals
}

export function uncheckRefs(pattern) {
  Object.keys(this.refs).forEach(ref => {
    if (match(pattern, ref)) {
      this.refs[ref].checked = false
    }
  })
}

export function checkRefs(pattern) {
  Object.keys(this.refs).forEach(ref => {
    if (match(pattern, ref)) {
      this.refs[ref].checked = true
    }
  })
}

export function uncheck(ref) {
  const dom = this.refs[ref]
  if (dom) {
    dom.checked = false
  }
}

export function check() {
  const dom = this.refs[ref]
  if (dom) {
    dom.checked = true
  }
}
