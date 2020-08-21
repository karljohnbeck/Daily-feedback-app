import React, {Component} from 'react';
// bring in component that wants history
import {withRouter} from 'react-router-dom'

class SupportBtn extends Component {

  handleClick = () => {
    console.log('you going to plants');
    
    this.props.history.push('/comment')
  }

  render() {
    return (
      
        <button onClick={this.handleClick}>next</button>
    
    )
  }
}

// give this component acsess to history
export default withRouter(SupportBtn);