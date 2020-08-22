import React, {Component} from 'react'
import { connect } from 'react-redux'
import ReviewSubmitBtn from './ReviewSubmitBtn'
import axios from 'axios'

class ReviewSubmit extends Component {

    handleClick = () => {
        console.log('you going to plants');
        axios.put()
        this.props.history.push('/completed')
      }

    render() {
        return(
            <>
            <h2>Ready to submit?</h2>
            <p>Make any last min changes below.</p>
            <h3>Feeling: <input value={this.props.reduxState.feelingReducer} /></h3>
            <h3>Understanding: <input value={this.props.reduxState.understandingReducer} /></h3>
            <h3>Support: <input value={this.props.reduxState.supportReducer} /></h3>
            <h3>Comment: <input value={this.props.reduxState.commentReducer} /></h3>

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