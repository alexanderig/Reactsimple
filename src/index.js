import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
//import ArticleComponent from './components/articleComponent'
import AppComponent from "./components/AppComponent";
//import AppComponent from './AppComponent';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

/*ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();



ReactDOM.render(
    <Router>
        <AppComponent/>
    </Router>,
    // eslint-disable-next-line react/jsx-no-undef
    document.getElementById('root')
);
