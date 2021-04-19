import React, { useState, useEffect } from 'react'
import Notify from './components/Notify'
import numbers from './services/numbers'
import InputField from './components/InputField'
import AddNew from './components/AddNew'
import ShowNumbers from './components/ShowNumbers'

const App = () => {
  const colorSuccess = 'green'
  const colorError = 'red'
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(undefined)

  useEffect(() => {
    numbers.getAll().then(p => setPersons(p))
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const removeFromPersons = (id) => {
    setPersons(persons.filter(p => p.id !== id))
  }

  const notifyUser = (color, content) => {
    const newMessage = { color, content }
    setMessage(newMessage)
    setTimeout(() => setMessage(undefined), 6000)
  }

  const askUpdate = (person, newNumber) => {
    if (!(window.confirm(`Update ${person.name} number?`)))
      return
    const uPerson = { ...person, number: newNumber }
    numbers.updateNumber(uPerson).then(r => {
      setPersons(persons.map(p => p.id !== uPerson.id ? p : uPerson))
      notifyUser(colorSuccess, `${person.name} number updated`)
    }).catch(res => {
      if (res.response.status === 400) {
        removeFromPersons(person.id)
        notifyUser(colorError, `${person.name} number has been removed by another user`)
        return
      }
      notifyUser(colorError, res.response.data.error)
    })
  }

  const addNumber = (event) => {
    event.preventDefault()
    const person = persons.find(e => e.name === newName)
    if (person !== undefined) {
      if (person.number === newNumber) {
        notifyUser(colorError, `${newName} is already added to phonebook`)
        return
      }
      askUpdate(person, newNumber)
      return
    }
    const newPerson = { name: newName, number: newNumber }
    if (newPerson.name.length < 1 || newPerson.number.length < 1) {
      notifyUser(colorError, 'Missing name, number or both')
      return
    }
    setNewName('')
    setNewNumber('')
    numbers.addNew(newPerson).then(r => {
      setPersons(persons.concat(r))
      notifyUser(colorSuccess, `Added ${r.name}`)
    }).catch(r => {
      notifyUser(colorError, r.response.data.error)
    })

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (event) => {
    const id = event.target.getAttribute('data-id')
    const person = persons.find(p => p.id === id)

    if (!(window.confirm(`Delete ${person.name}?`)))
      return

    numbers.tryDelete(person.id).then(() => {
      removeFromPersons(person.id)
      notifyUser(colorSuccess, `${person.name} removed`)
    }).catch(() => {
      notifyUser(colorError, 'Something went wrong')
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notify message={message} />
      <InputField text="filter shown with" value={filter} handler={handleFilterChange} />
      <AddNew addNumber={addNumber} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <ShowNumbers persons={persons} filterName={filter} handler={handleDelete} />
    </div>
  )
}

export default App
