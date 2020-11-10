import React from 'react'
import FormItem from './FormItem'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState((state,props) => {
        return {sent: true}
        })
        setTimeout(() => {
            this.setState({name: '', email: '', message: '', sent: false})
        }, 2000)
    }

    render() {
        document.title = "Contact"
        return (
            <div style={{color: '#42332e', padding: '0 40px', paddingTop: '80px', position: 'relative'}}>
                <h1 style={{textAlign: 'center', fontSize: '3em', marginBottom: '40px'}}>Contact Us</h1>
                <div style={{maxWidth: '500px', margin: 'auto'}}>
                    <p style={{marginBottom: '30px', fontWeight: '600'}}>Questions? Concerns? We'd love to hear from you!</p>
                    <form onSubmit={this.handleSubmit}>
                        <FormItem label="Name" type="text" value={this.state.name} onChange={this.handleChange} 
                        name="name" id="name" style={{height: '35px', width: '100%'}} />
                        
                        <FormItem label="Email" type="email" value={this.state.email} onChange={this.handleChange} 
                        name="email" id="email" style={{height: '35px', width: '100%'}} />
                        
                        {/* Could include an option in FormItem component to change to text area or maybe create new component */}
                        
                        <div style={{marginBottom: '30px'}}>
                            <label htmlFor="message" style={{margin: '10px 0', display: 'block', fontWeight: 'bold'}}>Message</label>
                            <textarea name="message" value={this.state.message} onChange={this.handleChange} id="message" style={{display: 'block', minWidth: '100%', maxWidth: '100%', minHeight: '150px', padding: '20px'}} />
                        </div>
                        
                        <FormItem noLabel={true} type="submit"  
                        value="SEND MESSAGE" style={{background: '#f37243', border: 'none', 
                        padding: '15px 30px', color: 'white', fontSize: 'normal', fontWeight: 'bold', fontFamily: 'Roboto', letterSpacing: '1.5px', cursor: 'pointer'}} />
                    </form>
                </div>

                {this.state.sent ? 
                    <div style={{zIndex: '2', width: 'max-content', position: 'absolute', top: '30vh', left: '50%', marginLeft: '-50px', textAlign: 'center', 
                    padding: '20px 40px', border: '2px solid #e8b78a', borderRadius: '5px', background: '#e8b78a', color: 'white', fontWeight: 'bold'}}>
                        MESSAGE SENT
                    </div> :
                    ""
                }
            </div>
        )
    }
}

export default Contact