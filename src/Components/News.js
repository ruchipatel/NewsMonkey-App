import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div>
         <div className='section py-5'>
             <div className='container'>
                 <h1>NewsMonkies Top Headlines</h1>
                 <div className='row my-2'>
                       <NewsItems title="test1" description="my desc"/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                        <NewsItems/>
                 </div>
             </div>
         </div>
      </div>
    )
  }
}
