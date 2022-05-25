import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {


  constructor(){
    super();
    this.state ={
      articles:[],
      loading:false,
      page:1
    }
  }

  async componentDidMount()
  {
    let data_url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9d220fcff82f453caa833fc8381a7b92&page=1";
    let data = await fetch(data_url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
  }

  handlePrevClick = async () => {
    let data_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d220fcff82f453caa833fc8381a7b92&page=${this.state.page - 1}`;
    let data = await fetch(data_url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:parsedData.articles,
      page:this.state.page - 1
    })
  }
  handleNextClick = async () => {
    let data_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d220fcff82f453caa833fc8381a7b92&page=${this.state.page + 1}`;
    let data = await fetch(data_url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:parsedData.articles,
      page:this.state.page + 1
    })
  }

  render() {
    return (
      <div>
         <div className='section py-5'>
             <div className='container'>
                 <h1>NewsMonkies Top Headlines</h1>
                 <div className='row my-2'>
                  
                  {this.state.articles.map((element)=>{
                      return <NewsItems key={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
                  })}  
                 </div>
            
             <div className='d-flex justify-content-between my-4'>
                  <button  disabled={this.state.page<=1} className='btn btn-sm btn-primary'  onClick={this.handlePrevClick}>&larr; Previous</button>
                  <button className=' btn btn-sm btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
              </div>
         </div>
         </div>
      </div>
    )
  }
}
