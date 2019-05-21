import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import BikePage from './BikePage';
import PaymentPage from './PaymentPage';
import Navbar from './Navbar';
import AddBike from './AddBike';
import AddUser from './AddUser';
import UserProfile from './UserProfile';

export const AppContext = React.createContext();

class App extends Component {
  state = {
    city: "",
    bike_type: "all",
    login:true,
    email:"henrik@hoi.com",
    bikeKey:"3",
    setState: this.setState.bind(this)
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="app">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/Home' component={MainPage} />
            <Route exact path='/Items' component={ItemList} />
            <Route exact path='/BikePage/:id' component={BikePage} />
            <Route exact path='/AddBike' component={AddBike} />
            <Route exact path='/PaymentPage/:id/:startDate/:endDate' component={PaymentPage} />
            <Route exact path='/AddUser' component={AddUser} />
            <Route exact path='/UserProfile' component={UserProfile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </AppContext.Provider>

    )
  }
}

export default App;
