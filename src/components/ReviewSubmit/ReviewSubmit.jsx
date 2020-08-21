import React, {Component} from 'react'
import { connect } from 'react-redux'
import ReviewSubmitBtn from './ReviewSubmitBtn'

class ReviewSubmit extends Component {

    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/completed')
      }

    render() {
        return(
            <>
            <p>review</p>
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

export default connect(mapStateToProps)(ReviewSubmit);