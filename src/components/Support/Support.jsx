import React, {Component} from 'react'
import { connect } from 'react-redux'
import SupportBtn from './SupportBtn'

class Support extends Component {
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
        this.props.dispatch({type: "SET_SUPPORT", payload: this.state.currentInput})
        this.props.history.push('/comment')
      } else {
        alert('Please fill out the field please.')
    }
}
    render() {
        return(
            <>
            <h4>How supported do you feel today?</h4>
            <p>Help im drowning! :     1 - 2 - 3 - 4 - 5 : So Much Help!</p>

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

export default connect(mapStateToProps)(Support);