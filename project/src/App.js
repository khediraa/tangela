import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import BikePage from './BikePage';
import Navbar from './Navbar';

export const AppContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({city: target.value});
    }
      
    handleSelect(event){
        const target = event.target;
        this.setState({bike_type: target.value});
    }
      
    handleSubmit(event) {
        alert('Searched: ' + 'CITY: ' +  this.state.city + 'START DATE: ' + this.state.startDate.toString()
        + 'END DATE: '+ this.state.endDate.toString() + 'TYPE: ' + this.state.bike_type );
        this.props.history.push('/Items');
        event.preventDefault();
    }

    state = {
        city: '',
        bike_type:'',
        startDate:'',
        endDate:'',
        handleChange: this.handleChange,
        handleSelect: this.handleSelect,
        handleSubmit: this.handleSubmit
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
