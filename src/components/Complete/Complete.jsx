import React, {Component} from 'react'
import { connect } from 'react-redux'
import DidItBtn from './CompleteBtn'

class DidIt extends Component {
    render() {
        return(
            <p>p</p>
            // <CompleteBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(DidIt);