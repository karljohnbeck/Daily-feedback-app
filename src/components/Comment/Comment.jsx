import React, {Component} from 'react'
import { connect } from 'react-redux'
import CommentBtn from'./CommentBtn'

class Comment extends Component {
    render() {
        return(
           
            <CommentBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Comment);