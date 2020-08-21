import React, {Component} from 'react'
import { connect } from 'react-redux'
import UnderstandingBtn from './UnderstandingBtn'

class Understanding extends Component {
    state = {
        currentInput: ''
    }

    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }

    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/support')
      }

    render() {
        return(
            <>
            <h4>How is your understanding on todays material?</h4>
            <input onChange={this.handleChange} />
            <button onClick={this.handleClick}>next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding);