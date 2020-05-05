import { createStore, combineReducers } from 'redux'
import goalReducer from './goal'


const rootReducer = combineReducers({
    goals: goalReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => console.log('Store from redux', store.getState()))

export default store