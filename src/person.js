import React, { Component } from 'react';

const Person = (props) => {
    return (
        <div onClick={props.click}>
        <p>my name is {props.name} and i am {props.age} years old </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.Changed} value={props.name}></input>
        </div>   
    )
} ;

export default Person;