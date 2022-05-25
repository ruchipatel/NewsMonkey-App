import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let  {title,description,imageUrl,url}= this.props
    return (
      <div className='col-md-3 col-sm-6'>
        <div className="card my-3">
        <img className="card-img-top" src={!imageUrl?"https://cdn.pixabay.com/photo/2017/05/30/03/58/fake-2355686__340.jpg":imageUrl} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank"  rel="noreferrer"  className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
