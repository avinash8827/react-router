import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            <hr />
            <br />
            <br />
            {props.children}
            <hr />
              
            <Footer />
            <br />
            <br /> 
        </>
        
    )
}
