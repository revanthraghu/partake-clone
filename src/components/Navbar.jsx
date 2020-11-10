import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {AuthContext} from '../Contexts/AuthContext'
  
function Navbar(props) {
    return (
        <AuthContext.Consumer>
            {
                ({auth, count, logout}) => {
                    return (
                    <div style={{zIndex: '2', background: '#e8b78a', top: 0, width: '100%', height: '120px', position: 'relative', boxShadow: '2px 1px 2px #eee', fontFamily: 'sans-serif', padding: '50px 21.5% 15px 24%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Link to="/" style={{position: 'absolute', left: '0', right: '0', top: '20px', marginLeft: 'auto', marginRight: 'auto', width: '180px', height: '90px'}}>
                            <img style={{width: "100%", height: 'auto', display: 'block'}} src="/logo.webp" alt="logo" />
                        </Link>
                        <Link to="/cart" style={{display: 'flex', alignItems: 'center', textDecoration: 'none', position: 'absolute', right: '15%', top: '30px', color: 'rgb(36,25,10)'}}>
                            <div style={{marginRight: '10px', height: '20px', minWidth: '20px', width: 'max-content', backgroundColor: 'rgb(36,25,10)', color: 'white', textAlign: 'center', position: 'relative'}}>
                                <div style={{position: 'absolute', top: '-5px', left: '0px', right: '0px', margin: '0 auto', height: '7.5px', width: '15px', borderTopLeftRadius: '7.5px', borderTopRightRadius: '7.5px', border: '2px solid rgb(36,25,10)'}}></div>
                                {auth ? <span>{count}</span> : <span>0</span>}
                            </div>
                            <div>CART</div>
                        </Link>
                        <div>
                            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/shop">SHOP</NavLink>
                            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/faq">FAQ</NavLink>
                            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/locations">FIND US</NavLink>
                        </div>
                        <div>
                            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/about">ABOUT</NavLink>
                            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/contact">CONTACT</NavLink>
                            {auth ? 
                            <span style={{cursor: 'pointer', color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} onClick={(e) => logout(e)}>LOGOUT</span>
                            : <NavLink activeStyle={{fontWeight: 'bold'}} style={{color: 'rgb(36,25,10)', padding: '20px', textDecoration: 'none'}} to="/login">LOGIN</NavLink>
                            }
                        </div>
                    </div>
                    )
                }
            }
        </AuthContext.Consumer>
    )
}

export default Navbar