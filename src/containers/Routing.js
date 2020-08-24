import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarTitle from '../components/NavBarTitle/NavBarTitle'
import NavTestRadium from '../components/NavTestRadium/NavTestRadium'
import HomeButtons from './HomeButtons/HomeButtons';
import CardsCategory from './CardsCategory/CardsCategory';

class Routing extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={NavBarTitle} />
                <Route path="/" component={NavTestRadium} />
                <Switch>
                    <Route exact path="/" component={HomeButtons} />
                    <Route  path="/:category_name" component={CardsCategory} />
                </Switch>
            </div>
        )
    }
}

export default Routing;
