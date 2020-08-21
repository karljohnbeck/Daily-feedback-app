import React, {Component} from 'react'
import { connect } from 'react-redux'
import SupportBtn from './SupportBtn'

class Support extends Component {
    render() {
        return(
            
            <SupportBtn />
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Support);