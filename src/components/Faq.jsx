import React from 'react'
import faqs from '../data/faqs.json'

function Question(props) {
    return (
        <div style={{marginBottom: '60px', padding: '0 50px'}}>
            <p style={{fontWeight: 'bold', marginBottom: '15px'}}>{props.question}</p>
            <p style={{lineHeight: '2rem', textAlign: 'justify'}}>{props.answer}</p>
        </div>
    )
}

function Faq() {
    document.title = "FAQs"
    return (
        <div style={{color: '#42332e', paddingTop: '80px'}}>
            <h1 style={{textAlign: 'center', fontSize: '3em', marginBottom: '40px'}}>FAQ</h1>
            <div style={{margin: 'auto', maxWidth: '900px'}}>
                {Object.keys(faqs).map((question, index) => <Question key={index} question={question} answer={faqs[question]} /> )}
            </div>
        </div>
    )
}

export default Faq