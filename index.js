import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './src/js/react/App'

import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <div>
                <App/>
            </div>
        </Route>
    </Router>)
    , document.getElementById('root')
)
