import React from 'react'
import GifList from '/home/dorken/react/react-async-gif-search-lab/src/components/GifList'
import GifSearch from '/home/dorken/react/react-async-gif-search-lab/src/components/GifSearch'

export default class GifListContainer extends React.Component {

constructor(){
    super()
this.state = {
    search: '',
    gifs: []
}
}


submithandler = (newinput) => {
 this.setState({search: newinput})
 
}
 

    componentDidUpdate(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(resp => this.setState({gifs: resp.data}))
}



    render(){
        return (
            <div>
                <GifSearch searchinput={this.submithandler} fetchgif={this.fetchgif}/>
            <GifList list={this.state.gifs}/>
            
            </div>
        )
    }
}
