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

  tick() {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.dateTick = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.dateTick);
  }

  render() {



    return (
      <div className='gtc'>
        <h1>George The Clock </h1>
        <h1>{this.state.date.toDateString()}</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }

}






export default Clock;