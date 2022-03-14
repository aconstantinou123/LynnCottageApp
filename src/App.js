import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history'

import LandingPage from './components/LandingPage/LandingPage'

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Routes>
      <Route path='/'  element={<LandingPage/>}/>
    </Routes>
  </Router>
)

export default App;
