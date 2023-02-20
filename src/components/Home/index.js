import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {loggedIn: true, message: 'Please Login'}

  changeButton = () => {
    const {loggedIn, message} = this.state
    if (loggedIn) {
      this.setState({loggedIn: false, message: 'Welcome User'})
    } else {
      this.setState({loggedIn: true, message: 'Please Login'})
    }
  }

  render() {
    const {loggedIn, message} = this.state

    return (
      <div className="bg_container">
        <Message message={message} />
        {loggedIn ? (
          <Login changeButton={this.changeButton} />
        ) : (
          <Logout changeButton={this.changeButton} />
        )}
      </div>
    )
  }
}

export default Home
