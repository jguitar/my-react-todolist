import React from 'react'

const WarningBanner = (props) => {
  if (!props.warn) {
    return null
  }

  return <div className='warning'> Warning!</div>
}

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {showWarning: true}
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render () {
    return (
      <React.Fragment>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </React.Fragment>
    )
  }
}

export default Page
