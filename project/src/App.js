import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import BikePage from './BikePage';
import PaymentPage from './PaymentPage';
import Navbar from './Navbar';
import AddBike from './AddBike';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/Home' component={MainPage} />
                    <Route exact path='/Items' component={ItemList} />
                    <Route exact path='/BikePage' component={BikePage} />
                    <Route exact path='/AddBike' component={AddBike} />
                    <Route exact path='/PaymentPage' component={PaymentPage} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default App;