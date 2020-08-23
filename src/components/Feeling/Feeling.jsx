import React, { Component } from 'react'
import { connect } from 'react-redux'


class Feeling extends Component {

    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.feelingReducer
        })
    }

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
                console.log('to understanding');
                this.props.dispatch({ type: "SET_FEELING", payload: this.state.currentInput })
                this.props.history.push('/understanding')
        } else {
            alert('Select one option before clicking next.')
        }
    }

    render() {
        return (
            <>
                <h3>How are you feeling today ?</h3>
                {/* <p>Poor :     1 - 2 - 3 - 4 - 5 : Awesome</p> */}

                <div className="radioTown" onChange={this.handleChange} >
                <h5>Poor :</h5> 
                1 <input className="radioBtn" type="radio" value="1" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "1"}/> 
                2 <input className="radioBtn" type="radio" value="2" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "2"}/> 
                3 <input className="radioBtn" type="radio" value="3" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "3"}/> 
                4 <input className="radioBtn" type="radio" value="4" name="feeling"  defaultChecked={this.props.reduxState.feelingReducer === "4"}/> 
                5 <input className="radioBtn" type="radio" value="5" name="feeling" defaultChecked={this.props.reduxState.feelingReducer === "5"}/> 
                <h5>: Awesome </h5>
            </div>

                {/* <input className="input" type="number" onChange={this.handleChange}/> */}
                {/* <FeelingBtn onClick={this.addFeelings}/> */}
                <button className="btn btn-primary" onClick={this.handleClick}>next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);