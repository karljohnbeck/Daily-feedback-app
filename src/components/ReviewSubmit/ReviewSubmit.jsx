import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import swal from '@sweetalert/with-react';


class ReviewSubmit extends Component {

    handleClick = () => {
        const currentFeedback = {
            feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportReducer,
            comment: this.props.reduxState.commentReducer
        }
        console.log('you going to plants');
        this.postFeedbackData(currentFeedback)
        this.getFeedbackData()
        swal("Thanks for Submitting!", "Your feedback has been saved", "success");
        this.props.history.push('/completed')
      }
      postFeedbackData = (currentFeedback) => {
        axios.post('/feedback', currentFeedback)
        .then((response) => {
            console.log('post sucsess')
            this.props.dispatch({type: 'RESET_STATE'})
        }).catch((error) => {
            console.log(error)
        })
      }

      getFeedbackData = () => {
        axios.get('/feedback')
            .then((response) => {
                console.log('get sucsess')
                this.props.dispatch({type: 'SET_FEEDBACK_DATA', payload: response.data})
            }).catch((error) => {
                console.log(error)
            })
      }


      handleClickFeeling = () => {
        this.props.history.push('/feeling')
      }
      handleClickUnderstanding = () => {
        this.props.history.push('/understanding')
      }
      handleClickComment = () => {
        this.props.history.push('/comment')
      }
      handleClickSupport = () => {
        this.props.history.push('/support')
      }
      

    render() {
        return(
            <>
            <h1>Ready to submit?</h1>
            <h2>Feeling: {this.props.reduxState.feelingReducer} <button className="edit btn btn-secondary" onClick={this.handleClickFeeling}>edit</button></h2>
            <h2>Understanding: {this.props.reduxState.understandingReducer} <button className="edit btn btn-secondary" onClick={this.handleClickUnderstanding}>edit</button></h2>
            <h2>Support: {this.props.reduxState.supportReducer} <button className="edit btn btn-secondary" onClick={this.handleClickSupport}>edit</button></h2>
            <h2>Comment: {this.props.reduxState.commentReducer} <button className="edit btn btn-secondary" onClick={this.handleClickComment}>edit</button></h2> 

            <button  className="btn btn-primary" onClick={this.handleClick}>Submit</button>
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