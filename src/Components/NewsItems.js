import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let  {title,description}= this.props
    return (
      <div className='col-md-3 col-sm-6'>
        <div className="card my-3">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
