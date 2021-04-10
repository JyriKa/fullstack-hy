const Weather = ({ weather }) => {
    if (weather === undefined) return <div></div>
    return (
        <div>
            <b>Weather in {weather.name}</b>
            <p>Temperature: {(weather.main.temp - 272.15).toFixed(2)} Celcius</p>
            <p>Conditions: {weather.weather[0].main}</p>
            <p>Wind: {weather.wind.speed}</p>
        </div>
    )
}

export default Weather