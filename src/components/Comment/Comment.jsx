import React, {Component} from 'react'
import { connect } from 'react-redux'
import CommentBtn from'./CommentBtn'

class Comment extends Component {
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
        this.props.dispatch({type: "SET_COMMENT", payload: this.state.currentInput})
        this.props.history.push('/review')
      }
    
    render() {
        return(
            <>
            <h3>*Any Comments?</h3>
            <p>(Optional)</p>
            <input className="input" onChange={this.handleChange} />
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

export default connect(mapStateToProps)(Comment);