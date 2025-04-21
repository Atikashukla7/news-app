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

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${category}&lang=en&country=${country}&token=${apiKey}&max=${pageSize}&page=${page}`
      )
      .then((response) => {
        setArticles(response.data.articles);
        setResults(response.data.totalArticles);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
        setLoading(false);
      });
  }, [country, category, pageSize, apiKey, page]);

  const handlePreviousClick = () => {
    if (page <= 1) return;
    setPage(page - 1); // Triggers useEffect
  };

  const handleNextClick = () => {
    if (page + 1 > Math.ceil(results / pageSize)) return;
    setPage(page + 1); // Triggers useEffect
  };

  const seen = new Set();

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
                  imageUrl={element.image}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* <div className="container d-flex justify-content-between mt-4">
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
        </button> */}
      {/* </div> */}
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
  pageSize: 10,
  category: 'general',
};

export default News;
