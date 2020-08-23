import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// components
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comment from '../Comment/Comment'
import DidIt from '../Complete/Complete'
import ReviewSubmit from '../ReviewSubmit/ReviewSubmit'
import FeedbackData from '../FeedbackData/FeedbackData'
import { connect } from 'react-redux'

import './bootstrap.css'

class App extends Component {

// on load get the previous feedback data
  componentDidMount = () => {
    this.getFeedbackData()
  }

  // GET request
  getFeedbackData = () => {
    axios.get('/feedback')
      .then((response) => {
        // update redux withe the feedback data
        this.props.dispatch({ type: 'SET_FEEDBACK_DATA', payload: response.data })
      }).catch((error) => {
        console.log(error)
      })
  }

  // reset all the input reducers to their empty state
  clearReducers = () => {
    this.props.dispatch({ type: 'RESET_STATE' })
  }

  render() {
    return (
      <div className="App container">
        <Router>

          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <nav>
              {/* link to home, will call the clearReducer function */}
              <Link to={"/"}><button className="btn btn-light" onClick={this.clearReducers}>Home</button></Link>
            </nav>
          </header>
          {/* Home page router */}
          <Route exact path="/" >
            <Link to={"/feeling"}>
              <button className="start btn btn-primary" onClick={this.goToFeelings}>Give feedback</button>
            </Link>
            <h3>Previous feedback</h3>
            <FeedbackData />
          </Route>
          {/* all the feedback data pages */}
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comment" component={Comment} />
          <Route path="/review" component={ReviewSubmit} />
          <Route path="/completed" component={DidIt} />

        </Router>
        <br />
      </div>
    );
  }
}

// allow redux to be accessed 
const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
