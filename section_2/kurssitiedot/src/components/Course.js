import React from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ parts }) => parts.map(element =>
  <Part key={element.name.replace(' ', '')} part={element.name} exercises={element.exercises} />)

const Total = ({ parts }) =>
  <b>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</b>

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course