import React, {Component} from 'react'
import { connect } from 'react-redux'
import FeelingBtn from './FeelingBtn'


class Feeling extends Component {
    state = {
        currentInput: ''
    }

    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }

    addFeelings = () => {
        // this.props.dispatch({type: 'SET_FEELINGS', payload: this.state.currentInput})
        console.log('woo')
    }

    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/understanding')
      }
    
     
    render() {
        return(
            <>
            <h4>How are you feeling today ?</h4>
            <input onChange={this.handleChange} />
            {/* <FeelingBtn onClick={this.addFeelings}/> */}
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

export default connect(mapStateToProps)(Feeling);