import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import ItemList from './ItemList';
import Error from './Error';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/Home' component={MainPage} />
                <Route path='/Items' component={ItemList} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Routes;