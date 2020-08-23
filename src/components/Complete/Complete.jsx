import React, {Component} from 'react'
import { connect } from 'react-redux'


class DidIt extends Component {
    
    

    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/')
      }
    
    render() {
        return(
            <>
            
            <h1>Submission received!</h1>
            <button  className="btn btn-primary" onClick={this.handleClick}>Return to Home</button>

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