import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION()
);
export default store; 
