import React, { useState } from 'react'

const DisplayVotes = ({voteCount}) => <p>Anecdote has : {voteCount} votes</p>

const DisplayAnectodeWVotes = ({anectode, votes}) => {
  return (
    <div>
      <p>{anectode}</p>
      <DisplayVotes voteCount={votes} />
    </div>
  )
}

const DisplayMva = ({anectode, votes}) => {
  if (votes === 0) {
    return (
      <p>No given votes</p>
    )
  }
  return (
    <DisplayAnectodeWVotes anectode={anectode} votes={votes} />
  )
}

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const modelVotes = Array(anecdotes.length).fill(0)

  const [votes, setVotes] = useState(modelVotes)
  const [votedAnecdote, setVotedAnecdote] = useState({anectode: "", voteCount: 0})
  const [selected, setSelected] = useState(0)

  const handleChange = () =>  {
    let randomNum = selected
    while (randomNum === selected) {
      randomNum = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(randomNum) 
  }

  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
    if (votedAnecdote.voteCount < copyVotes[selected]) {
      setVotedAnecdote({anectode: anecdotes[selected], voteCount: copyVotes[selected]})
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnectodeWVotes anectode={anecdotes[selected]} votes={votes[selected]} />
      <Button handler={handleChange} text="Random anecdote" />
      <Button handler={handleVote} text="Vote" />
      <h2>Anecdote with most votes</h2>
      <DisplayMva anectode={votedAnecdote.anectode} votes={votedAnecdote.voteCount} />
    </div>
  )
}

export default App
