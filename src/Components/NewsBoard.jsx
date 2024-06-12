import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';
import { apiKey } from './data';


const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
       fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category]);
        
  return (
    <>
     <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
     {articles.map((news,index)=>{
      return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
     })}
    </>
  )
}
 
export default NewsBoard;