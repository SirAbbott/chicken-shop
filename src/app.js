import React from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      shops: []
    }
  }

  componentDidMount(){
    axios.get('/api/chickenshops')
      .then(res => this.setState({ shops: res.data }))
      .catch(err => console.log(err.message))
  }

  render(){
    if(!this.state.shops) return <p> Chicken cooking.. </p>
    console.log(this.state.shops.name)
    return(
      <div>
        {this.state.shops.map((shop, i) =>
          <div key={i}>
            <h1>{shop.name}</h1>
            <img src={shop.image} alt={shop.name}/>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
