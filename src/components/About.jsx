import React from 'react'

const paraStyle = {
    lineHeight: '2rem',
    fontSize: 'large',
    maxWidth: '700px',
    margin: 'auto',
    marginBottom: '40px',
    textAlign: 'justify',
    padding: '30px'
}

function About() {
    document.title = 'About'
    return (
        <section style={{color: '#42332e', paddingTop: '80px'}}>
            <h1 style={{textAlign: 'center', fontSize: '3em', marginBottom: '40px', fontWeight: '800'}}>Our Story</h1>
            <p style={paraStyle}>
                Naturally, I set out to find the healthy, 
                allergy-friendly snacks we'd need to fuel 
                our active lifestyle. I came away from the 
                stores frustrated and mystified. Nothing on 
                the shelves met our dietary needs and my healthy
                 standards. Were we the only health-conscious 
                 family living with food allergies and looking 
                 for fun, easy food options?
            </p>
            <p style={paraStyle}>
                Of course not. In my research, I quickly learned 
                what so many parents out there already know. Food 
                allergies are a serious and growing concern for 
                today's families.
            </p>
            <p style={paraStyle}>
                Eight allergens (wheat, tree nuts, peanuts, milk, 
                eggs, soy, fish, and shellfish) are implicated in 
                90% of food allergies, which currently affect 1 in 
                13 kids and are expected to impact up to 1 in 10 
                kids by 2020. Studies have even shown that food 
                allergies are linked to elevated social anxiety 
                and fear of social rejection and humiliation in 
                children. While no one knows why food allergies are 
                on the rise, the need for allergy-friendly food options 
                is exceedingly clear.
            </p>
            <p style={paraStyle}>
                So I set out to create my own. Making allergy-friendly, 
                healthy snacks (from scratch) for my daughter was hard 
                work, but I refused to give up or give in – and Partake 
                Foods was born. Our products are deliciously made for just 
                about everyone - from those with restrictions to those who 
                simply want to eat more healthfully.
            </p>
            <p style={paraStyle}>
                You see, we're a family who understands the challenges that 
                come with finding safe, healthy snacks and the importance of 
                bringing people together through food.
            </p>
        </section>
    )
}

export default About