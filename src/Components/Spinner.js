import React, { Component } from 'react'
import loading from './loading.gif';
import App from '../App.css';
export default class Spinner extends Component {
  render() {
    return (
      <div className='loader'>
        <img src={loading} alt='loader'/>
      </div>
    )
  }
}

