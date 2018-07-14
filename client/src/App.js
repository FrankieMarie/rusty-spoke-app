import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setUser, logout } from './redux/actions/authActions'
import { Provider } from 'react-redux'
import store from './redux/store'

import PrivateRoute from './components/auth/PrivateRoute'

// Components
import Landing from './components/Landing'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import CustomerById from './components/CustomerById'
import CurrentVisits from './components/CurrentVisits'
import Purchases from './components/Purchases'
import Holds from './components/Holds'
import Comments from './components/Comments'
import Shifts from './components/Shifts'
import Staff from './components/Staff'
// Add New Forms
import RegisterStaff from './components/add-new-forms/RegisterStaff'
import NewShift from './components/add-new-forms/NewShift'
import NewVisit from './components/add-new-forms/NewVisit'
import NewCustomer from './components/add-new-forms/NewCustomer'
import NewPurchase from './components/add-new-forms/NewPurchase'
import NewHold from './components/add-new-forms/NewHold'
// Edit forms
import EditCustomer from './components/edit/EditCustomer'
import EditStaff from './components/edit/EditStaff'
import EditHold from './components/edit/EditHold'

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
            <Header />
            <main className="container">
              <Navbar />
              <div className="content">
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/customers" component={Customers} />
                <PrivateRoute exact path="/customers/:id" component={CustomerById} />
                <PrivateRoute exact path="/customers-new" component={NewCustomer} />
                <PrivateRoute exact path="/edit/:id" component={EditCustomer} />
                <PrivateRoute exact path="/current-visits" component={CurrentVisits} />
                <PrivateRoute exact path="/new-visit" component={NewVisit} />
                <PrivateRoute exact path="/purchases" component={Purchases} />
                <PrivateRoute exact path="/new-purchase" component={NewPurchase} />
                <PrivateRoute exact path="/holds" component={Holds} />
                <PrivateRoute exact path="/new-hold" component={NewHold} />
                <PrivateRoute exact path="/edit-hold/:id" component={EditHold} />
                <PrivateRoute exact path="/comments" component={Comments} />
                <PrivateRoute exact path="/shifts" component={Shifts} />
                <PrivateRoute exact path="/new-shift" component={NewShift} />
                <PrivateRoute exact path="/staff" component={Staff} />
                <PrivateRoute exact path="/edit-staff/:id" component={EditStaff} />
                <PrivateRoute exact path="/new-staff" component={RegisterStaff} />
              </Switch>
              </div>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App