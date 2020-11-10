import React from 'react';
import data from '../data/products.json';
import ProductPreview from './ProductPreview';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: new URLSearchParams(this.props.location.search).get('sort'),
        };
        this.handleChange = this.handleChange.bind(this);
        this.setSortName = this.setSortName.bind(this);
    }

    setSortName() {
        if (this.state.sort === 'low_to_high') {
            return 'Low to High';
        } else if (this.state.sort === 'high_to_low') {
            return 'High to Low';
        } else {
            return 'Best Selling';
        }
    }

    handleChange(e) {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `?sort=${e.target.value}`,
        });
        this.setState({ sort: e.target.value });
    }

    render() {
        console.log('render');
        document.title = 'Shop';
        let sorted_data = data.slice(0);
        if (this.state.sort === 'low_to_high') {
            sorted_data.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (this.state.sort === 'high_to_low') {
            sorted_data.sort((a, b) => Number(b.price) - Number(a.price));
        } else {
            //do nothing
        }
        return (
            <div style={{ margin: '60px 80px', color: '#007167' }}>
                <div style={{ position: 'relative', width: 'max-content' }}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Sort:</span>{' '}
                        {this.setSortName()}
                    </div>
                    <select
                        value={this.state.sort}
                        onChange={this.handleChange}
                        style={{
                            cursor: 'pointer',
                            opacity: '0',
                            zIndex: '2',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                        }}
                    >
                        <option value="best">Best Selling</option>
                        <option value="low_to_high">Low to High</option>
                        <option value="high_to_low">High to Low</option>
                    </select>
                </div>
                <div
                    style={{
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '1200px',
                        flexWrap: 'wrap',
                    }}
                >
                    {sorted_data.map((item) => (
                        <ProductPreview
                            key={item.sku}
                            width={'400px'}
                            sku={item.sku}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Shop;
