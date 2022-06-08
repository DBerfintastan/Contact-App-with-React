import React from 'react'
import { useState } from 'react';
function List({ contacts }) {
    const [filter, setFilter] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filter.toLocaleLowerCase())
        );
    });
    return (
        <div>
            Arama: &nbsp;
            <input
                placeholder='Filtre'
                value={filter}
                onChange={(event) => setFilter(event.target.value)} />
            <br />

            Kayıtlar:

            <ul className="list">
                {
                    filtered.map((contacts, i) => <li key={i}>
                        <span>{contacts.fullname}</span>
                        <span>{contacts.phone_number}</span> 
                    </li>)}
            </ul>

            <p>Toplam Kişi Sayısı: {filtered.length}</p>
        </div>
    )
}

export default List