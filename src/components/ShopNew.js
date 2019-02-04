import React from 'react'
import axios from 'axios'
import ShopForm from './ShopForm'

class ShopNew extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        website: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( { target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/chickenshops',
      this.state.data)
      .then(() => this.props.history.push('/chickenshops'))
      .catch( err => alert(err.message))
  }

  render(){
    return (
      <main className="section">
        <div className="container">
          <ShopForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default ShopNew
