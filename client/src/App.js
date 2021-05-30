import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import '../src/styles/styles.scss';
import AppRouter from '../src/Routers/AppRouter';
import reducer from './redux/reducers/mainReducer';

//initilising the store and connecting redux dev tools
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
