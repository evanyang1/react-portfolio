import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

export default function Home() {
    return (
        <div>
            <Header />
            
            <ul>
                <li><a href="https://www.linkedin.com/in/evanjyang/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/evanyang1" target="_blank">Github</a></li>
            </ul>

            <Footer />
        </div>
    )
}