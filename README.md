### async add reducers for code splitting

```
import asyncCombineReducers from 'redux-async-combine-reducers'
import combineReducers from 'redux'

...

export default asyncCombineReducers(combineReducers)({
	// params as combineReducers
})

```

[example](https://github.com/iamcco/BEND)

