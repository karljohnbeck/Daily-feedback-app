import React, { Component } from 'react'
import { connect } from 'react-redux'


class FeedbackData extends Component {

    
    
    
    render() {
        return (
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comment</th>

                    </tr>
                </thead>
                <tbody>
                    
                        {this.props.reduxState.feedbackDataReducer.map((feedback, i) => {
                            return (
                                <tr key={i}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(FeedbackData);