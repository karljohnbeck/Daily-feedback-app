import React, {Component} from 'react'
import { connect } from 'react-redux'

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
            <h3>*Any comments?</h3>
            <p>(Optional)</p>
            <input contentEditable="true" className="input" onChange={this.handleChange} defaultValue={this.props.reduxState.commentReducer}/>
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