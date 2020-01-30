import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lit from "./lightbox"
// using class instade of function


class App extends React.Component {

 state={
   name:"Anas",
   src:"https://images.unsplash.com/photo-1579745705144-a18eefdd659a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
   description: "description"
 }


  // render() methode
  render() {
    return (<div>
      <div>
        <button onClick={()=>{
          this.setState({
            name:"Anas",
            src:"https://images.unsplash.com/photo-1579745705144-a18eefdd659a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            description: "description"
          })
        }}>Anas</button>

        <button onClick={()=>{this.setState({
             name:"ghada",
             src:"https://images.unsplash.com/photo-1579782343892-3ca82a45dd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
             description: "description"
        })}}>ghada </button>
        <button  onClick={()=>{this.setState({
             name:"ghada",
             src:"https://images.unsplash.com/flagged/photo-1579791557010-0ba6b4a49cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
             description: "description"
        })}}>Ala</button>
      </div>
      <div>
      <img height="400px" src={this.state.src}/>
    <h1>{this.state.name}</h1>
    <p>{this.state.description}</p>

      </div>



    </div>);
  }
}

export default App;
