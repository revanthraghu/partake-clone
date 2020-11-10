import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import {NavLink} from 'react-router-dom'
import CartItem from './CartItem'

function Cart() {
    return (
        //Create a table with the image, quantity, price and total cost
        <AuthContext.Consumer>
            {
                ({cart}) => {
                    document.title = 'Cart'
                    return (
                    <React.Fragment>
                            {Object.keys(cart).length === 0 ? 
                            <div style={{textAlign: 'center', marginTop: '80px'}}>
                                <h1>Cart is Empty</h1> 
                                <NavLink style={{textDecoration: 'none', fontFamily: 'Roboto', 
                                    fontWeight: 'bold', color: 'white'}} to="/shop">
                                        <div style={{margin: '20px auto', background: '#f37243', padding: '20px 40px', width: 'max-content'}}>
                                            GO TO SHOP
                                        </div>
                                </NavLink>
                            </div>
                            : <div style={{marginTop: '80px'}}>{Object.keys(cart).map(sku => <CartItem key={sku} product={cart[sku]} />)}</div>}
                        </React.Fragment>
                    )
                }
            }
        </AuthContext.Consumer>
    )
}

export default Cart