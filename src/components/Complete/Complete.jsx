import React, { Component } from 'react'
import { connect } from 'react-redux'


class DidIt extends Component {

    // go back home
    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <h1>Submission received!</h1>
                <button className="btn btn-primary" onClick={this.handleClick}>Return to Home</button>
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

export default connect(mapStateToProps)(DidIt);