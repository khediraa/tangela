import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import BikePage from './BikePage';
import PaymentPage from './PaymentPage';
import ConfirmationPage from './ConfirmationPage';


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/Home' component={MainPage} />
                    <Route exact path='/Items' component={ItemList} />
                    <Route exact path='/BikePage' component={BikePage} />
                    <Route exact path='/PaymentPage' component={PaymentPage} />
                    <Route exact path='/ConfirmationPage' component={ConfirmationPage} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default App;