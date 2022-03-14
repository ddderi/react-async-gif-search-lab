import React from 'react'

export default class GifList extends React.Component {


rendergif = () => {
   return this.props.list.map((elem, index) => <li key={index} ><img  src={elem.images.original.url} alt=''/></li>)
}



    render() {
        return (
            <div>
                <ul>
                {this.rendergif()}
                </ul>
            </div>
        )
    }
}