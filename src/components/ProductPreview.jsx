import React from 'react'
import { Link } from 'react-router-dom/'

function ProductPreview(props) {
    return (
        <div style={{lineHeight: '1.7rem', maxWidth: props.width, padding: '0 20px', textAlign: 'center', marginBottom: '20px'}}>
            <Link style={{textDecoration: 'none', color: '#241911'}} to={`/shop/${props.sku}`}>
                <img style={{maxWidth: '100%', height: 'auto', display: 'block'}} src={`/${props.image}.webp`} alt={`product ${props.sku}`} />
                <h4>{props.name}</h4>
            </Link>
            <div style={{fontSize: '1.2rem', color: '#e8b78a', fontWeight: 'bold'}}>from ${props.price}</div>
        </div>
    )
}

export default ProductPreview