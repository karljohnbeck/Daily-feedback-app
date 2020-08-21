import React, {Component} from 'react'
import { connect } from 'react-redux'
import ReviewSubmitBtn from './ReviewSubmitBtn'

class ReviewSubmit extends Component {
    render() {
        return(
            <ReviewSubmitBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ReviewSubmit);