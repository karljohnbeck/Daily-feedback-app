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