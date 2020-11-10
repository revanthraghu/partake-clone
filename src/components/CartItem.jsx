import React from 'react'

function CartItem({product}) {
    return (
        <div style={{padding: '20px', display: 'flex', flexDirection: 'row', borderBottom: '1px solid #e8b78a', width: '50%'}}>
            <div style={{height: '100px', width: '100px', marginRight: '25px'}}>
                <img style={{maxWidth: '100%', height: 'auto', display: 'block'}} src={`/${product.image}.webp`} alt={product.sku} />
            </div>
            <div>
                <h4 style={{marginBottom: '25px'}}>{product.name}</h4>
                <div>
                    <div>Price: <strong>$ {product.price}</strong></div>
                    <div>Qty: <strong>{product.quantity}</strong></div>
                    <div>Total: <strong>{Number(product.price)*Number(product.quantity)}</strong></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem