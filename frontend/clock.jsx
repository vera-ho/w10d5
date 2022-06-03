import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  tick(e) {
    e.preventDefault();
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <h1>George The Clock {this.state.date.getSeconds()}</h1>
    )
  }

}






export default Clock;