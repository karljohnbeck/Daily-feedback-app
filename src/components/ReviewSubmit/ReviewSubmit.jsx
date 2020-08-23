import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import swal from '@sweetalert/with-react';


class ReviewSubmit extends Component {


  handleClick = () => {
    // this checks a final time to see that no field is not filled out
    // this only comes up if you refresh the page before hitting submit,
    // so added this finial check as a fail safe to nto allow 0s as inputs
    if (this.props.reduxState.feelingReducer 
      && this.props.reduxState.understandingReducer 
      && this.props.reduxState.supportReducer !== 0) {
    //collect the information to be sent to database
    const currentFeedback = {
      feeling: this.props.reduxState.feelingReducer,
      understanding: this.props.reduxState.understandingReducer,
      support: this.props.reduxState.supportReducer,
      comment: this.props.reduxState.commentReducer
    }
    console.log('you going to plants');
    // post the feedback
    this.postFeedbackData(currentFeedback)
    // update redux with new info
    this.getFeedbackData()
    // sucsess alert
    swal("Thanks for Submitting!", "Your feedback has been saved", "success");
    // go to the final page
    this.props.history.push('/completed')
    } else {
      // tell the user to fix any broken fields
      swal('Something happened!', 'One or more response is 0 click edit to change these values.');

    }
  }

  // post request
  postFeedbackData = (currentFeedback) => {
    axios.post('/feedback', currentFeedback)
      .then((response) => {
        console.log('post sucsess')
        this.props.dispatch({ type: 'RESET_STATE' })
      }).catch((error) => {
        console.log(error)
      })
  }

  // get request
  getFeedbackData = () => {
    axios.get('/feedback')
      .then((response) => {
        console.log('get sucsess')
        this.props.dispatch({ type: 'SET_FEEDBACK_DATA', payload: response.data })
      }).catch((error) => {
        console.log(error)
      })
  }

// edit button functions
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

// display all the previous data on the dom
  render() {
    return (
      <>
        <h1>Ready to submit?</h1>
        <h2>Feeling: {this.props.reduxState.feelingReducer} <button className="edit btn btn-secondary" onClick={this.handleClickFeeling}>edit</button></h2>
        <h2>Understanding: {this.props.reduxState.understandingReducer} <button className="edit btn btn-secondary" onClick={this.handleClickUnderstanding}>edit</button></h2>
        <h2>Support: {this.props.reduxState.supportReducer} <button className="edit btn btn-secondary" onClick={this.handleClickSupport}>edit</button></h2>
        <h2>Comment: {this.props.reduxState.commentReducer} <button className="edit btn btn-secondary" onClick={this.handleClickComment}>edit</button></h2>

        <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
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

export default connect(mapStateToProps)(ReviewSubmit);