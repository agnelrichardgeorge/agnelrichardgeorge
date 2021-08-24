import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk';
import { reducers } from "../reducers";


export const store = createStore(
    // 1st pass reducer 
    reducers, 
    // middle ware as redux thugk
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)