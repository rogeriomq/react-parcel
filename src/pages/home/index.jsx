import React from 'react'
require('./index.css')
const version = React.version

class Home extends React.Component {
  render () {
    return (
      <div className="teste">
        <h2>React {version} with Parcel-Bundler</h2>
        <p></p>
      </div>
    )
  }
}

export default Home
