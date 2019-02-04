import React from 'react'

import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import ShopIndex from './components/ShopIndex'
import ShopShow from './components/ShopShow'
import ShopNew from './components/ShopNew'

import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <main>
          <nav>
            <Nav />
          </nav>
          <Switch>
            <Route path="/chickenshop/new" component={ShopNew} />
            <Route path="/chickenshops/:id" component={ShopShow} />
            <Route path="/" component={ShopIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
