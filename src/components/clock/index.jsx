import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </React.Fragment>
    )
  }
}

export default Clock
