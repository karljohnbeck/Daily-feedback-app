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
        
        this.props.history.push('/review')
      }
    
    render() {
        return(
            <>
            <h4>Any Comments?</h4>
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

export default connect(mapStateToProps)(Comment);