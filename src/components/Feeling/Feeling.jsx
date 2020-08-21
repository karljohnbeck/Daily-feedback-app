import React, {Component} from 'react'
import { connect } from 'react-redux'
import FeelingBtn from './FeelingBtn'


class Feeling extends Component {
    render() {
        return(
            
            <FeelingBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);