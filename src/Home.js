import React from "react"

class Home extends React.Component {
    render() {
        return (<div>
            <h1>Feed</h1>
            {this.props.dogRepository.getDogImages().map( url => {
                return <img key={url} src={url}/>
            })}
        </div>)
    }
}

export default Home