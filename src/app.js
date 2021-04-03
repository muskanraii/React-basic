import React, { Component } from 'react';
import Person from './person';

class App extends Component{

    state={
        person:[
            {name: 'muskan' , age:22},
            { name: 'divya' , age:24},
            { name: 'sejal' , age:23}
        ],
        showPerson: true,
        other: false,
        more: true
    }
    //  var style= {
    //     font-size: 20px;
    //   }
    switchName = () =>{
        console.log("Was Clicked");
        this.setState(
            {
            person:[
                {name: 'muskan rai' , age:22},
                { name: 'divya bhargu' , age:24},
                { name: 'sejal kumar' , age:23}
            ]
        }
        )
    }
    // comment
    toggleDiv = () =>{
        console.log("Was Clicked to toggle");
        const doesshow = this.state.showPerson;
        this.setState({showPerson : !doesshow})
    }
    togglebutton = () =>{
        console.log("Was Clicked to toggle person");
        const doesshowperson = this.state.other;
        this.setState({other : !doesshowperson})
    }

    changeName = (event) =>{
        console.log("Was Clicked for name change");
        this.setState(
            {
            person:[
                {name: 'muskan rai' , age:22},
                { name: event.target.value , age:24},
                { name: 'sejal kumar' , age:23}
            ]
        }
        )
    }
    // flexcol{
    //     display:flex;
    //     flex-direction:colume;

    //   }
   
    render(){
        let otherPerson = null
        if(this.state.other){
          otherPerson = ( <Person name = {this.state.person[2].name} age={this.state.person[2].age} /> )
        }
        let morePerson = null 
        if(this.state.more){
            morePerson = (
                <div>
                    {
                        this.state.person.map(person => {
                          return  <Person
                            name={person.name}
                            age = {person.age}
                            />
                        } )
                    }
                </div>
            )
        } 
        const style ={
            color:'red'
        }
       
        return(
            <div className="app">
                <h1> Hi this is muskan</h1>
                <p> Does this work now ?</p>
                <div >
                <button onClick={this.switchName}>Switch</button>
                <button onClick={this.toggleDiv}>Hide/show</button>
                <button onClick={this.togglebutton}>Hide/show person</button>
                </div>
                <h6 style={style} >this is using mapping</h6>
                {morePerson}
                <h6 style={style}>this is using conditinal opration</h6>
                { this.state.showPerson ?
                <div>
                <Person name = {this.state.person[0].name} age={this.state.person[0].age} />
                <Person name = {this.state.person[1].name} age={this.state.person[1].age}  Changed={this.changeName}>Hello</Person>
                <Person name = {this.state.person[2].name} age={this.state.person[2].age} />
                </div> : null 
                }
                { otherPerson }
            </div>
        )
    }
}

export default App ;