import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';

import { getData } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }


  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map((smurf, index) => (
          <div className='smurf' key={index}>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingData }) => ({ smurfs, fetchingData }) 

export default connect(mapStateToProps, {getData})(App);
