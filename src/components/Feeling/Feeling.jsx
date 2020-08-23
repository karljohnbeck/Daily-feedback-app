import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from '@sweetalert/with-react';



class Feeling extends Component {

    // added this to make the state start as the reducers value,
    // this allows the radio button last hit to be remembered 
    // probably is a more elegant way to do this but this worked
    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.feelingReducer
        })
    }

    state = {
        currentInput: ''
    }

    // when a radio button is clicked set the sate to its value
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
            // if a radio button is clicked, dispatch the data to redux
            this.props.dispatch({ type: "SET_FEELING", payload: this.state.currentInput })
            // go to the next component
            this.props.history.push('/understanding')
        } else {
            // sweet alert to make sure you select a button 
            swal('Incomplete step', 'Select one option before clicking next.');
        }
    }

    render() {
        return (
            <>
                <h3>How are you feeling today ?</h3>

                {/* radio button location */}
                <div className="radioTown" onChange={this.handleChange} >
                    <h5>Poor :</h5>
                1 <input className="radioBtn" type="radio" value="1" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "1"} />
                2 <input className="radioBtn" type="radio" value="2" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "2"} />
                3 <input className="radioBtn" type="radio" value="3" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "3"} />
                4 <input className="radioBtn" type="radio" value="4" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "4"} />
                5 <input className="radioBtn" type="radio" value="5" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "5"} />
                    <h5>: Awesome </h5>
                </div>

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

export default connect(mapStateToProps)(Feeling);