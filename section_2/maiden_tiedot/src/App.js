import { useState, useEffect } from 'react'
import axios from 'axios'
import InputField from './components/InputField'
import Preview from './components/Preview'
import Country from './components/Country'

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [country, setCountry] = useState(undefined)
  const [weathers, setWeathers] = useState({})
  const [weather, setWeather] = useState(undefined)

  const changeCountry = (c) => {
    setCountry(c)
    if (c !== undefined) callWeather(c)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    if (country !== undefined) {
      setCountry(undefined)
    }
  }

  const callWeather = (c) => {
    const numCode = c.numericCode
    if (numCode in weathers) {  
      setWeather(weathers[numCode])
      return
    }
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${c.capital}&appid=${api_key}`
    console.log('fething weather');
    axios.get(uri)
      .then(response => {
        setWeather(response.data)
        const newWeather = {}
        newWeather[numCode] = response.data
        setWeathers(Object.assign(weathers, newWeather))
      })
  }

  const handleCButton = (event) => {
    const fCountry = countries.find(e =>
      e.numericCode === event.target.getAttribute('data-num'))
    changeCountry(fCountry)
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const lFilter = filter.toLowerCase().split(' ')
  const filtered = countries.filter(country => {
    const lName = country.name.toLowerCase().split(' ')
    const found = lFilter.map(f => lName.find(n => n.indexOf(f) === 0) !== undefined)
    return !(found.includes(false))
  })

  if (filtered.length === 1 && country === undefined) {
    changeCountry(filtered[0])
}

  return (
    <div className="App">
      <InputField text="Find countries" value={filter}
        handler={handleFilter} />
      <Preview country={country} handler={handleCButton}
        filtered={filtered} />
      <Country country={country} weather={weather} />
    </div>
  );
}

export default App;
