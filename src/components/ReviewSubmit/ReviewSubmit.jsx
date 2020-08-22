import React, {Component} from 'react'
import { connect } from 'react-redux'
import ReviewSubmitBtn from './ReviewSubmitBtn'
import axios from 'axios'

class ReviewSubmit extends Component {

    handleClick = () => {
        const currentFeedback = {
            feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportReducer,
            comment: this.props.reduxState.commentReducer
        }
        console.log('you going to plants');
        axios.post('/feedback', currentFeedback)
        .then((response) => {
            console.log('post sucsess')
        })
        this.props.history.push('/completed')
      }

    render() {
        return(
            <>
            <h2>Ready to submit?</h2>
            <h3>Feeling: {this.props.reduxState.feelingReducer} </h3>
            <h3>Understanding: {this.props.reduxState.understandingReducer} </h3>
            <h3>Support: {this.props.reduxState.supportReducer} </h3>
            <h3>Comment: {this.props.reduxState.commentReducer} </h3>

            <button onClick={this.handleClick}>submit</button>
            </> 
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ReviewSubmit);