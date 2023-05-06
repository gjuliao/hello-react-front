import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from './components/Welcome';
import { Provider } from 'react-redux';
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
