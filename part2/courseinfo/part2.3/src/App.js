import React from 'react'
import Course from './components/course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
        
      ]
    },
    
  ]

  return courses.map((course, index) => (
    <div key={index}>
     <h1>Web development curriculum</h1>
      <Course course={course} />
    </div>
  ));
};
export default App