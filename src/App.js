import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './components/Welcome';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Welcome />
      </Router>
    </Provider>
  );
}

export default App;
