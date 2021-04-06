import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = Math.round(((good - bad) / all) * 100) / 100
  const positive = Math.round((good / all) * 1000) / 10 + "%"
  if (all !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{positive}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>No Feedback Given</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <div>
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
