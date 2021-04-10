import CountryPreview from './CountryPreview'

const Preview = ({ country, filter, handler, filtered }) => {
    if (country !== undefined) {
        return <div></div>
    }
    
    if (filter === '' || filtered.length > 10) {
        return <p>Too many matches. Specify another filter</p>
    }

    if (filtered.length === 1) {
        return <div></div>
    }

    const show = filtered.map(e =>
        <CountryPreview key={e.numericCode}
            name={e.name} data={e.numericCode} handler={handler} />)
    return show
}

export default Preview
