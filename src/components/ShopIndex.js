import React from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'

class ShopIndex extends React.Component{

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
    return(
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            {this.state.shops.map((shop, i) =>
              <div className="column is-one-third" key={i}>
                <h1 className="title is-3">{shop.name}</h1>
                <Link to={`chickenshops/${shop._id}`} >
                  <div className="image" style={{backgroundImage: `url(${shop.image})`}}></div>
                </Link>
                <p>{shop.website}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShopIndex
