import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home"
import DogRepository from "./DogRepository"

const dogRepository = new DogRepository()

ReactDOM.render(<Home 
    dogRepository={dogRepository}
/>, document.getElementById("app"));