import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from '@sweetalert/with-react';


class Understanding extends Component {

    // added this to make the state start as the reducers value,
    // this allows the radio button last hit to be remembered 
    // probably is a more elegant way to do this but this worked
    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.understandingReducer
        })
    }

    state = {
        currentInput: ''
    }
    // change state based on radio button value
    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }

    // when "next" is clicked, make sure a button is clicked 
    // long 'if' block due to input originally being a text input
    handleClick = () => {
        if (this.state.currentInput === '1'
            || this.state.currentInput === '2'
            || this.state.currentInput === '3'
            || this.state.currentInput === '4'
            || this.state.currentInput === '5') {
            this.props.dispatch({ type: "SET_UNDERSTANDING", payload: this.state.currentInput })
            this.props.history.push('/support')
        } else {
            swal('Incomplete step', 'Select one option before clicking next.');
        }
    }

    render() {
        return (
            <>
                <h3>How is your understanding on todays material?</h3>
                {/* radio button block */}
                <div className="radioTown" onChange={this.handleChange}>
                    <h5>Totally lost :</h5>
                1 <input className="radioBtn" type="radio" value="1" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "1"} />
                2 <input className="radioBtn" type="radio" value="2" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "2"} />
                3 <input className="radioBtn" type="radio" value="3" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "3"} />
                4 <input className="radioBtn" type="radio" value="4" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "4"} />
                5 <input className="radioBtn" type="radio" value="5" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "5"} />
                    <h5>: I could teach this </h5>
                </ div>
                <button className="btn btn-primary" onClick={this.handleClick}>next</button>
            </>
        )
    }
}

// allow redux to be accessed 
const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding);