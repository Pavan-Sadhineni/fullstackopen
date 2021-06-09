import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './anecdoteReducer'
import notifReducer from './notificationReducer'
import thunk from 'redux-thunk'
import filterReducer from "./filterReducer";

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notifReducer,
    filter: filterReducer,
})

let store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store