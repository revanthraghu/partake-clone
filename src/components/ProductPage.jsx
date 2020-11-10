import React from 'react'
import data from '../data/products.json'
import PageNotFound from './PageNotFound'
import { AuthContext } from '../Contexts/AuthContext'

class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: '1'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const product = data.find(item => item.sku === Number(this.props.sku))
        if(!product) {
            return <PageNotFound />
        }
        return (
            <div style={{color: '#e8b998', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '80px 40px 40px 40px', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{minWidth: '300px', width: '50%'}}>
                    <img style={{maxWidth: '100%', height: 'auto', display: 'block'}} src={`/${product.image}.webp`} alt={product.name} />
                </div>
                <div style={{alignSelf: 'flex-start', minWidth: '300px', width: '50%'}}>
                    <h1 style={{margin: '50px 0', fontWeight: '900', color: '#007167', lineHeight: '1.4em', textAlign: 'center'}}>{product.name}</h1>
                    <div style={{margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '200px'}}>
                        <div style={{marginRight: '25px', marginBottom: '25px'}}>
                            <span style={{fontSize: 'small', fontWeight: 'bold'}}>Price</span>
                            <div style={{marginTop: '8px', fontSize: 'large'}}>$ {product.price}</div>
                        </div>
                        <div style={{marginBottom: '25px'}}>
                            <label style={{fontSize: 'small', fontWeight: 'bold'}} htmlFor="quantity">Quantity</label>
                            <input style={{marginTop: '8px', display: 'block', color: '#e8b998', fontSize: 'larger', borderColor: '#e8b998', borderBlockColor: '#e8b998', 
                            border: '1px solid #e5e5e5', WebkitAppearance: 'textfield', padding: '10px 20px', width: '65px', textAlign: 'center'}} type="number" name="quantity" 
                            id="quantity" value={this.state.quantity} onChange={this.handleChange} />
                        </div>
                        <AuthContext.Consumer>
                            {
                                ({auth, addToCart}) => {
                                    return (
                                    <button style={{background: '#f37243', border: 'none', 
                                    padding: '15px 30px', color: 'white', fontSize: 'normal', 
                                    fontWeight: 'bold', fontFamily: 'Roboto', letterSpacing: '1.5px', 
                                    cursor: 'pointer'}} 
                                    onClick={() => {
                                        if(auth === true) {
                                            return addToCart({...product, quantity: Number(this.state.quantity)}) 
                                        }
                                        else {
                                            return (this.props.history.push('/login'))
                                        }
                                    }}>
                                    Add to Cart
                                    </button>
                                    )
                                        }
                            }
                        </AuthContext.Consumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductPage