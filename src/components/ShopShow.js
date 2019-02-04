import React from 'react'
import axios from 'axios'

class ShopShow extends React.Component {

  constructor() {
    super()

    this.state = {
      shop: []
    }
  }

  componentDidMount() {
    axios.get(`/api/chickenshops/${this.props.match.params.id}`)
      .then(res => this.setState({ shop: res.data }))
  }

  render() {
    if(!this.state.shop) return null
    const { name, image, website } = this.state.shop
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Website</h4>
              <p>{website}</p>
              <hr />
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default ShopShow
