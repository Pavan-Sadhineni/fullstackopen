import React from 'react'

const Header = props =>
  <h1>{props.course.name}</h1>



const Part = props =>
  <p>{props.name} {props.exercises}</p>

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
        </div>
    )
}
const Course = (props) => {  
    console.log(props)  

    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            
        </div>
  )
}

export default Course