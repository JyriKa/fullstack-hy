import React from 'react';
import Weather from './Weather'

const Country = ({ country, weather }) => {
    if (country === undefined) return <div></div>
    
    const lLanguages = country.languages.map(({ name }) => <p key={name}>{name}</p>)
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <b>Languages</b>
            <div>
                {lLanguages}
            </div>
            <img src={country.flag} alt="country flag" width="100" height="100"/>
            <Weather weather={weather} />
        </div>
    )
}

export default Country