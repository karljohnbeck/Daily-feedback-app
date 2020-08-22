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
        if (this.state.currentInput === '1' 
            || this.state.currentInput === '2' 
            || this.state.currentInput === '3' 
            || this.state.currentInput=== '4' 
            || this.state.currentInput === '5') {
        console.log('you going to plants');
        this.props.dispatch({type: "SET_UNDERSTANDING", payload: this.state.currentInput})
        this.props.history.push('/support')
      }else {
        alert('Please fill out the field please.')
    }
}

    render() {
        return(
            <>
            <h4>How is your understanding on todays material?</h4>
            <p>Totally Lost :     1 - 2 - 3 - 4 - 5     : I could Teach this!</p>

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