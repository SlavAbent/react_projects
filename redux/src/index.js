import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk'

// function loggerMiddleware(store){
//   return function(next) {
//     return function(action){
//       const result = next(action);
//       console.log(store.getState());
//       return result
//     }
//   }
// }
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;



const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log(store.getState());
    return result
}
const store = createStore(rootReducer, 
  composeEnhancers(
    applyMiddleware(
      loggerMiddleware, 
      reduxThunk
    )
  )
)
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
