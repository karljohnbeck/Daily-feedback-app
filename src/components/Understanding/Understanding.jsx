import React, {Component} from 'react'
import { connect } from 'react-redux'
import UnderstandingBtn from './UnderstandingBtn'

class Understanding extends Component {
    render() {
        return(
            
            <UnderstandingBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding);