import React from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';

import { getData, addSmurf } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  };

  state = {
    smurf: {
      name:'',
      age:'',
      height:''
    }
  };

  changeHandler = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  };

  addNewSmurf = () => {
    this.props.addSmurf(this.state.smurf)
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">

        <h1>SMURFS! 2.0 W/ Redux</h1>

        {this.props.smurfs.map((smurf, index) => (
          <div className='smurf' key={index}>
            <h2><strong>Name:</strong> {smurf.name}</h2>
            <h2><strong>Age:</strong> {smurf.age}</h2>
            <h2><strong>Height:</strong> {smurf.height}</h2>
          </div>
        ))}

<form action="">
        <input
          type="text"
          name="name"
          onChange={this.props.changeHandler}
          placeholder="Name"
          value={this.props.smurfs.name}
        />

        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={this.props.changeHandler}
          value={this.props.smurfs.age}
        />

        <input
          type="text"
          name="height"
          onChange={this.props.changeHandler}
          placeholder="Height"
          value={this.props.smurfs.height}
        />

        <button >
        Add Smurf
        </button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({ smurfs }) 

export default connect(mapStateToProps, {getData, addSmurf})(App);
