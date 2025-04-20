import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ pageSize, country, category, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState(1);
  const seen = new Set();

  useEffect(() => {
    setLoading(true);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    axios
      .get(proxyUrl + url)
      .then((response) => {
        setArticles(response.data.articles);
        setResults(response.data.totalResults);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, [country, category, pageSize, apiKey, page]);

  const handlePreviousClick = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page + 1 > Math.ceil(results / pageSize)) return;
    setPage(page + 1);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Top Headlines</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {articles.map((element) => {
            if (seen.has(element.title)) return null;
            seen.add(element.title);
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
          disabled={page + 1 > Math.ceil(results / pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general',
};

export default News;
