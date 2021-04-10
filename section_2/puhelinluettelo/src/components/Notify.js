const Notify = ({ message }) => {
    if (message === undefined) return <div></div>
    const { color, content } = message
    const style = {
      fontSize: 20,
      backgroundColor: color,
      padding: '10px'
    }

    return (
        <div className="error" style={style}>
          {content}
        </div>
    )
}

export default Notify