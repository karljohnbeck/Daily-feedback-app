import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {

    
    state = {
        currentInput: ''
    }
    // added this to make the state start as the reducers value,
    // this allows the input last hit to be remembered 
    // probably is a more elegant way to do this but this worked
    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.commentReducer
        })
    }

    // Set state to comment input value
    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }

    handleClick = () => {
        this.props.dispatch({ type: "SET_COMMENT", payload: this.state.currentInput })
        this.props.history.push('/review')
    }

    render() {
        return (
            <>
                <h3>*Any additional comments?</h3>
                <p>(Optional)</p>
                <input contentEditable="true" className="input" onChange={this.handleChange} defaultValue={this.props.reduxState.commentReducer} />
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

export default connect(mapStateToProps)(Comment);