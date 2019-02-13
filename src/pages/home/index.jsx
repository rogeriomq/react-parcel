import React, { Component } from 'react'
const version = React.version

class Home extends Component {
  render () {
    return (
      <div>
        <h2>React {version} with Parcel bundler</h2>
        <p></p>
      </div>
    )
  }
}

export default Home
