import React from 'react'
import FormItem from '../components/FormItem'
import {AuthContext} from '../Contexts/AuthContext'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            failed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleReject = this.handleReject.bind(this)
        this.handleSucess = this.handleSucess.bind(this)
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleReject() {
        this.setState({failed: true})
        setTimeout(() => {
            this.setState({failed: false})
        }, 2000)
    }

    handleSucess() {
        if(this.props.history.length <= 2) {
            this.props.history.push('/')
        }
        else {
            this.props.history.goBack()
        }
    }

    render() {
        document.title = 'Login'
        return (
            <AuthContext.Consumer>
                {
                    ({handleAuth}) => {
                        return (
                            <React.Fragment>
                                <form onSubmit={(e) => handleAuth(e, this.state.username, this.state.password).then((res) => this.handleSucess(), (err) => this.handleReject())} 
                                style={{width: 'max-content', margin: 'auto', paddingTop: '80px', paddingBottom: '40px'}}>
                                    {this.state.failed ? 
                                        <small style={{color: 'red', fontWeight: 'bold'}}>Username/Password is wrong. Try again</small> 
                                        : ""
                                    }
                                    <FormItem required label="Username" type="text" name="username" 
                                    placeholder="Enter username" id="username" 
                                    value={this.state.username} onChange={this.handleChange} style={{height: '40px'}} />
                                    
                                    <FormItem required label="Password" type="password" name="password" 
                                    placeholder="Enter password" id="password" 
                                    value={this.state.password} onChange={this.handleChange} style={{height: '40px'}} />
                                    
                                    <FormItem noLabel={true} type="submit"  
                                    value="Submit" style={{background: '#f37243', border: 'none', padding: '15px 30px', color: 'white', fontSize: 'large', margin: '0 auto', display: 'block'}} />
                                </form>
                            </React.Fragment>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default Login