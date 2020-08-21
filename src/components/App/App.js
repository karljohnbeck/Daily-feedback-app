import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// components
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comment from '../Comment/Comment'
import Complete from '../Complete/Complete'
import ReviewSubmit from '../ReviewSubmit/ReviewSubmit'
class App extends Component {

  goToFeelings = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <nav>
            <Link to={"/feeling"}><button onClick={this.goToFeelings}>start feedback</button></Link>
          </nav>
          <Route exact path="/feeling" component={Feeling}/>
          <Route path="/understanding" component={Understanding}/>
          <Route path="/support" component={Support}/>
          <Route path="/comment" component={Comment}/>
          <Route path="/review" component={ReviewSubmit}/>
          <Route path="/completed" component={Complete}/>

        </Router>
        <br />
      </div>
    );
  }
}

export default App;
