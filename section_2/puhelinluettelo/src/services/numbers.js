import axios from 'axios'
const baseUrl = '/api/persons'

const addNew = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => { return response.data })
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => { return response.data })
}

const tryDelete = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => { return response.status })
}

const updateNumber = (person) => {
    const request = axios.put((`${baseUrl}/${person.id}`), person)
    return request.then(response => { return response.status })
}

const numbers = { addNew, getAll, tryDelete, updateNumber }

export default numbers