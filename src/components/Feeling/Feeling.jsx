import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeelingBtn from './FeelingBtn'


class Feeling extends Component {
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
            alert('Please fill out the field please.')
        }
    }

    render() {
        return (
            <>
                <h3>How are you feeling today ?</h3>
                <p>Poor :     1 - 2 - 3 - 4 - 5 : Awesome</p>
                <input className="input" type="number" onChange={this.handleChange}/>
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