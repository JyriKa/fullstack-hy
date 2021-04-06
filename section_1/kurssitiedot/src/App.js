import React from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ parts }) => parts.map(element =>
  <Part part={element.name} exercises={element.exercises} />)

const Total = ({ parts }) =>
  <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
