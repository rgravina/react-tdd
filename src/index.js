import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home"
import DogRepository from "./DogRepository"

const images = [
    "https://images.dog.ceo/breeds/mix/Polo.jpg",
    "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg"
]

const dogRepository = new DogRepository()

ReactDOM.render(<Home 
    images={images} 
    dogRepository={dogRepository}
/>, document.getElementById("app"));