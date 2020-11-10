import React from 'react'

const FormItem = ({label="", noLabel=false, type="text", name="", placeholder="", id=undefined, ...rest}) => {
    return (
        <div style={{marginBottom: '30px'}}>    
            {noLabel ? null : <label style={{margin: '10px 0', display: 'block', fontWeight: 'bold'}} htmlFor={id} >{label}</label>}
            <input type={type} name={name} placeholder={placeholder} id={id} {...rest} />
        </div>
    )
}

export default FormItem