import React from 'react'

const Stores = [
    {
        "name": "A Matter of Health",
        "address": "138 Rockland Plaza"
    },
    {
        "name": "A Matter of Health",
        "address": "1478 1st Ave"
    },
    {
        "name": "Amish Market",
        "address": "240 E 45th"
    }
]

const Location = (props) => {
    return (
        <div style={{marginBottom: '40px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '10px'}}>{props.name}</h3>
            <p>{props.address}</p>
        </div>
    )
}

function Locations() {
    document.title = "Our Locations"
    return (
        <div style={{color: '#42332e', paddingTop: '80px'}}>
            <h1 style={{textAlign: 'center', fontSize: '3em', marginBottom: '40px'}}>Where to Find Us</h1>
            <div style={{margin: '0 auto', width: 'max-content', padding: '0 40px'}}>
                {Stores.map((store, index) => <Location key={index} name={store.name} address={store.address} /> )}
            </div>
        </div>
    )
}

export default Locations