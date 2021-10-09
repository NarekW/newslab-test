import { createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CombineReducers from './CombineReducers';



export const store = createStore(
        CombineReducers,
        {},
        composeWithDevTools(applyMiddleware(thunk))
);