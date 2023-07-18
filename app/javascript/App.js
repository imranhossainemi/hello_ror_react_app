import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
          {/* Add more routes for other components */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
