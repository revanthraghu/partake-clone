import React from 'react'

export const AuthContext = React.createContext()

class AuthContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: false,
            username: 'user',
            password: 'aaa',
            cart: {},
            cart_count: 0
        }
        this.addToCart = this.addToCart.bind(this)
        this.handleAuth = this.handleAuth.bind(this)
        this.logout = this.logout.bind(this)
    }

    handleAuth(e, username, password) {
        e.preventDefault()
        return new Promise((resolve, reject) => {
            if(username === this.state.username && password === this.state.password) {
                this.setState({auth: true})
                resolve(true)
            }
            else {
                reject(false)
            }
        })
    }

    logout(e) {
        this.setState({auth: false})
    }
    
    addToCart(product) {
        if(this.state.cart.hasOwnProperty(product.sku)) {
            let updated_cart = JSON.parse(JSON.stringify(this.state.cart))
            updated_cart[product.sku].quantity += product.quantity 
            this.setState(prevState => 
            ({cart: updated_cart, cart_count: prevState.cart_count + product.quantity}))
        }
        else {
            this.setState(prevState => 
                ({cart: {...prevState.cart, [product.sku] : product }, 
                cart_count: prevState.cart_count + product.quantity}))
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{auth: this.state.auth, 
            addToCart: this.addToCart, count: this.state.cart_count, 
            cart: this.state.cart, handleAuth: this.handleAuth, logout: this.logout}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider