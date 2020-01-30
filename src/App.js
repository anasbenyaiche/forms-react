import React from "react";
import "./App.css";

export default class App extends React.Component {

    // we use a constructor to initialize our state
  constructor(props) {
    super(props);

    // we initiatied the state here with no value 
    this.state = {
      name: "",
      age: "",
      email: "",
      location: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="form">
          <div className="input-container">
            <span>name:</span>

            <input
              onChange={event =>
                this.setState({
                  name: event.target.value
                })
              }
              value={this.state.name}
              placeholder="tape your name"
            />
          </div>
          <div className="input-container">
            <span>email:</span>
            <input
              value={this.state.email}
              onChange={event => {
                
                this.setState({ email: event.target.value })}}
              placeholder="tape your email"
            />
          </div>
          <div className="input-container">
            <span>age:</span>
            <input
              value={this.state.age}
              onChange={event => this.setState({ age: event.target.value })}
              placeholder="tape your age"
            />
          </div>
          <div className="input-container">
            <span>location:</span>
            <input

                // the event to change the value of the input
              onChange={event =>
                this.setState({ location: event.target.value })
              }

            //   the value of the input is reliated to state automatically change when we change the value
              value={this.state.location}
              placeholder="tape your location"
            />
          </div>
        </div>
        <div className="profil">
            {/* we use the state which is a an object contains a name, age, email and location to output the result */}
          <h1>{this.state.name}</h1>
          <h1>{this.state.email}</h1>
          <h1>{this.state.location}</h1>
          <h1>{this.state.age}</h1>
        </div>
      </div>
    );
  }
}
