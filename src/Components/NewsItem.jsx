import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const NewsItem = ({title,description,imageUrl, newsUrl}) => {

  return (
    <>
    <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl: "https://www.ringsidenews.com/wp-content/uploads/2024/09/WWE%20SmackDown%20Spoiler%20Logo.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Link to={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</Link>
  </div>
</div>
    </div>
    <div>

    </div>
    </>

  )
}

export default NewsItem