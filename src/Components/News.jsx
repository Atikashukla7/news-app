import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';

const News = () => {


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(articles.totalResults)
    const [page, setPage] = useState(1);
    const seen = new Set();

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f5934662480a4031b9b5db6293062871")
            .then((response) => {
                setArticles(response.data.articles)
            })
            .catch((error) => {
                console.log("Error fetching data")
            })
    }, [])


    const handlePreviousClick = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f5934662480a4031b9b5db6293062871&page=${page - 1}`)
            .then((response) => {
                setArticles(response.data.articles)
            })
            .catch((error) => {
                console.log("Error fetching data")
            })
        setPage(page - 1)
    }


    const handleNextClick = () => {
        if(page+1 > Math.ceil(results/20)){

        } 
        else {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f5934662480a4031b9b5db6293062871&page=${page + 1}&pageSize=20`)
            .then((response) => {
                setArticles(response.data.articles)
            })
            .catch((error) => {
                console.log("Error fetching data")
            })
        setPage(page + 1)
        }
    }




    return (
        <div className='container my-4'>
            <h2> Top Headlines</h2>

            <div className='row'>
                {articles.map((element) => {
                    if (seen.has(element.title)) return null;
                    seen.add(element.title);
                    return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.link} />
                    </div>
                })}



            </div>
            <div className='container d-flex justify-content-between'>
                <button type="button" className="btn btn-dark " onClick={handlePreviousClick} disabled={page <= 1}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
}

export default News