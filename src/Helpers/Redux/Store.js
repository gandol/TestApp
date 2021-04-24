import { combineReducers, createStore } from 'redux'
import { listReducer } from './Reducer'
const rootReducer = combineReducers({
    listReducer: listReducer
})
const configureStore = () => createStore(rootReducer)
export default configureStore