import InputField from './InputField'

const AddNew = (props) => {
    const { addNumber, newName, handleNameChange, newNumber, handleNumberChange } = props
    return (
        <div>
            <h2>Add new</h2>
            <form onSubmit={addNumber}>
                <InputField text="name" value={newName} handler={handleNameChange} />
                <InputField text="number" value={newNumber} handler={handleNumberChange} />
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddNew
