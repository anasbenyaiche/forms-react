import React from 'react'


export default class App extends React.Component{
    constructor(props){
        super(props);{
            this.state={
                task:"",
                todolist:["cleaning the cars", "watching movie", "reading book"]
            }

        }
    }
    render(){
        return (<div>
            <div style={{border:"3px solid black "}}>
                <input />
                <button>+</button>
            </div>
            <div>
                <ul>
        {this.state.todolist.map(task => <li>{task}</li> )}
                </ul>
                
            </div>


        </div>)
    }
}