import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setUser, logout } from './redux/actions/authActions'
import { Provider } from 'react-redux'
import store from './redux/store'

// Components
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import CurrentVisits from './components/CurrentVisits'
import Purchases from './components/Purchases'
import Holds from './components/Holds'
import Comments from './components/Comments'
import Staff from './components/Staff'
import RegisterStaff from './components/RegisterStaff'
import Shifts from './components/Shifts'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setUser(decoded))
  const currentTime = Date.now() / 1000
  if(decoded.exp < currentTime) {
    store.dispatch(logout())
    window.location.href = '/'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/current-visits" component={CurrentVisits} />
            <Route exact path="/purchases" component={Purchases} />
            <Route exact path="/holds" component={Holds} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/new-staff" component={RegisterStaff} />
            <Route exact path="/shifts" component={Shifts} />
            <Route exact path="/comments" component={Comments} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;