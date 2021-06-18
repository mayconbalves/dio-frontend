import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from 'pages/home'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
