import React from 'react'

export default class GifSearch extends React.Component {
constructor(){
    super()
this.state = { 
    value: ''  
}
}

handleChange = (event) => {
    this.setState({value: event.target.value})
    
}

handlesearch = () => {
    this.props.searchinput(this.state.value)
    
}


    render() {
        return (
            <div className="gifsearch">
               <label >Enter a search term</label>
                <input type="search"  value={this.state.value} onChange={this.handleChange} id="site-search" name="q"/>

                <button onClick={this.handlesearch}>Search</button>

            </div>
        )
    }
}