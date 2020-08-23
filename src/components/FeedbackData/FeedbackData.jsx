import React, { Component } from 'react'
import { connect } from 'react-redux'


class FeedbackData extends Component {

    // table loop over the feedback data array and display it as a table on the dom
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

// allow redux to be accessed
const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(FeedbackData);