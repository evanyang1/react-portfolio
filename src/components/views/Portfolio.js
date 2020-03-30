import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

export default function Home() {
    return (
        <div>
            <Header />
            
            <div class="portfolio-items">
      <ul>
        <li><a href="https://github.com/evanyang1/evanyang1.github.io" target="_blank">Portfolio</a></li>
        <li> <a href="https://evanyang1.github.io/js-password-generator/" target="_blank">Password Generator</a></li>
        <li><a href="https://evanyang1.github.io/js-api-weather-app/" target="_blank">Weather App</a></li>
        <li><a href="https://evanyang1.github.io/js-calculator/" target="_blank">JavaScript Calculator</a></li>
        <li><a href="https://carlnaza.github.io/parseSuperchargers/" target="_blank">ParseSuperchargers (Group Project)</a> <a href="https://github.com/Carlnaza/parseSuperchargers" target="_blank">(Repo)</a></li>
        <li><a href="https://limitless-badlands-54723.herokuapp.com/" target="_blank">Express Notetaker</a> <a href="https://github.com/evanyang1/notes-app-jsonfile" target="_blank">(Repo)</a></li>
        <li><a href="https://young-forest-25942.herokuapp.com/" target="_blank">Burger App</a> <a href="https://github.com/evanyang1/burger-logger" target="_blank">(Repo)</a></li>
        <li><a href="https://warm-stream-20124.herokuapp.com/" target="_blank">Fake Yelp</a> <a href="https://github.com/evanyang1/felp" target="_blank">(Repo)</a></li>
      </ul>
    </div>

            <Footer />
        </div>
    )
}