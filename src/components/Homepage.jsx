import React from 'react'
import { Link } from 'react-router-dom/'
import data from '../data/products.json'
import ProductPreview from './ProductPreview'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
        this.loaded = this.loaded.bind(this)
    }
    
    loaded() {
        this.setState({loaded: true})
    }

    render() {
        document.title = "e-Commerce Site: Home"
        return (
            <div style={{position: 'relative', fontFamily: 'Roboto', opacity: this.state.loaded ? '1' : '0', transition: 'opacity 1s ease'}}>
                <div style={{position: 'relative'}}>
                    <img onLoad={this.loaded} style={{width: '100%', height: 'auto', display: 'block'}} src="/banner.webp" alt="banner" />
                    <div style={{color: 'white', position: 'absolute', top: '35%', textAlign: 'center', width: '100%'}}>
                        <h1 style={{margin: '15px 0px', fontWeight: '800', fontSize: '3rem'}}>Super Delicious Cookies</h1>
                        <p style={{marginBottom: '50px', fontWeight: '600', fontSize: '1.5rem', fontStyle: 'italic'}}>that are also gluten-free, vegan and allergy-friendly</p>
                        <Link to="/shop" style={{fontWeight: 'bold', fontSize: 'larger', color: '#ff4d00', background: 'white', padding: '20px 40px', textDecoration: 'none'}} >Get Some Cookies</Link>
                    </div>
                </div>
                <div style={{margin: '40px 80px', color: '#007167'}}>
                    <h1 style={{marginBottom: '30px', textAlign: 'center'}}>Featured Cookies</h1>
                    <div style={{margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', flexWrap: 'wrap'}}>
                        {data.filter(item => item.hasOwnProperty('featured'))
                        .map(item => <ProductPreview key={item.sku} width={'240px'} sku={item.sku} name={item.name} price={item.price} image={item.image} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage