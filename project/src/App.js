import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import BikePage from './BikePage';
import Navbar from './Navbar';

export const AppContext = React.createContext();

class App extends Component {
    state = {
        bike_type: "mtb",
        setState: this.setState.bind(this)
    };
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/Home' component={MainPage} />
                        <Route exact path='/Items' component={ItemList} />
                        <Route exact path='/BikePage' component={BikePage} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </AppContext.Provider>
        )
    }
}

export default App;
