const CountryPreview = ({ name, handler, data }) => {
    return (
        <div>
            {name}
            <button onClick={handler} data-num={data} style={{ fontSize: '10px' }}>
                Show
        </button>
        </div>
    )
}

export default CountryPreview
