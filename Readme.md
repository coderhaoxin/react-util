
### Install

```bash
npm i react-util
```

### Components

* Textarea
* Input

### APIs

* `this::allRefVals()`
* `this::clearRefs()`
* `this::setRefs(obj)`
* `this::refVal()`
  - get val - `this::refVal('ref')`
  - set val - `this::refVal('ref', 'val')`
* `this::clear('ref')`
* `this::focus('ref')`

### Examples

```js
import { allRefVals } from 'react-util'
import { Component } from 'react'

class App extends Component {
  getData() {
    console.log(this::allRefVals())
  }
}
```

### License
MIT
