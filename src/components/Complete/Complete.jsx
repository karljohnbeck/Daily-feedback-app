import React, {Component} from 'react'
import { connect } from 'react-redux'
import DidItBtn from './CompleteBtn'

class DidIt extends Component {
    

    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/')
      }
    
    render() {
        return(
            <>
            <p>DONE</p>
            <button onClick={this.handleClick}>next</button>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(DidIt);