import React from 'react';
import NameAndNumber from './NameAndNumber';

const ShowNumbers = ({ persons, filterName, handler }) => {
    const filtered = persons.filter(e => {
        return e.name.split(' ').find(n =>
            n.toLowerCase().indexOf(filterName.toLowerCase()) === 0)
    })
    const numbers = filtered.map(e =>
        <NameAndNumber key={e.id} person={e} handler={handler} />)
    return (
        <div>
            <h2>Numbers</h2>
            <div>{numbers}</div>
        </div>
    )
}

export default ShowNumbers
