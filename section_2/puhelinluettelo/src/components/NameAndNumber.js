import React from 'react';

const NameAndNumber = ({ person, handler }) => {
    const { name, number, id } = person
    return (
        <div>
            {name} {number}
            <button onClick={handler} data-id={id} style={{ fontSize: '10px' }}>
                Delete
        </button>
        </div>
    )
}

export default NameAndNumber
