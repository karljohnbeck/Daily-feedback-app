import React, { Component } from 'react'
import { connect } from 'react-redux'

class Understanding extends Component {

    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.understandingReducer
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
            || this.state.currentInput === '4'
            || this.state.currentInput === '5') {
            console.log('you going to plants');
            this.props.dispatch({ type: "SET_UNDERSTANDING", payload: this.state.currentInput })
            this.props.history.push('/support')
        } else {
            alert('Select one option before clicking next.')
        }
    }

    render() {
        return (
            <>
                <h3>How is your understanding on todays material?</h3>
                {/* <p>Totally lost :     1 - 2 - 3 - 4 - 5     : I could teach this</p> */}

                <div className="radioTown" onChange={this.handleChange}>
                    <h5>Totally lost :</h5>
                1 <input className="radioBtn" type="radio" value="1" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "1"} />
                2 <input className="radioBtn" type="radio" value="2" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "2"} />
                3 <input className="radioBtn" type="radio" value="3" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "3"} />
                4 <input className="radioBtn" type="radio" value="4" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "4"} />
                5 <input className="radioBtn" type="radio" value="5" name="understanding" defaultChecked={this.props.reduxState.understandingReducer === "5"} />
                    <h5>: I could teach this </h5>
                </ div>
                {/* <input type="number" className="input" onChange={this.handleChange} /> */}
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

export default connect(mapStateToProps)(Understanding);