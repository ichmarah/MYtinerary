import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import { getCities } from './store/actions/cityActions';
import { getItineraries } from './store/actions/itineraryActions'
// import { getUser } from './store/actions/userActions'
// import * as citiesActions from './store/actions/cityActions';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );
// const store = createStore( composeWithDevTools(applyMiddleware(thunk)) );

store.dispatch(getCities());
store.dispatch(getItineraries());
// store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
