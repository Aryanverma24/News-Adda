import React from 'react';
import image from '../assets/news.png';

const NewsItems = ({title,description,src,url}) => {
  return (
    <div className='card bg-dark text-light mb-3 d-inline-block px-3 py-3 mx-3 my-3' style={{maxWidth:"385px"}}>
  <img src={src?src:image} style={{height:"200px",width:"360px",paddingRight:"6px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,95):"News is information about current events. This may be provided through many different media..."}</p>
    <a href={url} className="btn btn-primary">More...</a>
  </div>
</div>
  )
}

export default NewsItems