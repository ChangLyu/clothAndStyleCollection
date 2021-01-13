import React from "react";
import FastMultiplication from "./algorithems/FastMultiplacation";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function AlgorithmApp() {
    let { path, url } = useRouteMatch();
    return (
        <div className="algorithm-app">
            <h3>Algorithem List</h3>
            <ul>
                <li>
                    <Link to={`${url}/fastmultiply`}>Fast Multiply-Karatsuba Multiplication</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/:fastmultiply`}>
                    <FastMultiplication />
                </Route>
            </Switch>

        </div>
    );
}
