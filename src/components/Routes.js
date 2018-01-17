import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import Account from './Account';
import Drawer from './Drawer';
import history from '../history';

export default class Routes extends Component {
  componentDidMount () {}

  render () {
    return (
      <Router history={history}>
          <div>
            <Drawer />
            <Switch>
              <Route exact path='/profile' component={Account} />
            </Switch>
          </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {}
// }

// const mapDispatch = (dispatch) => {
//   return {}
// }

// export default connect(mapState, mapDispatch)(Routes)