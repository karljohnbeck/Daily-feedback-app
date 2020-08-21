import React, {Component} from 'react'
import { connect } from 'react-redux'
import SupportBtn from './SupportBtn'

class Support extends Component {
    state = {
        currentInput: ''
    }

    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }


    handleClick = () => {
        console.log('you going to plants');
        
        this.props.history.push('/comment')
      }
    render() {
        return(
            <>
            <h4>How supported do you feel today?</h4>
            <input onChange={this.handleChange} />
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

export default connect(mapStateToProps)(Support);