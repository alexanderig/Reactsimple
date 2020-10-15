import React,{Component} from "react";
import {Route, Switch} from "react-router-dom";


export default class ChildRoutes extends Component{

    render() {
        return (
            <React.Fragment>
                <h1>Child routes</h1>
                <Switch>
                    <Route path='/child/route1/:id?'>
                        <p>Route 1</p>
                    </Route>
                    <Route path='/child/route2'>
                        <p>Route 2</p>
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}
