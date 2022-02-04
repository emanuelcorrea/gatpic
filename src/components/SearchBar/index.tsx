import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Unsplash from '../../api/Unsplash';

import styles from './style.module.scss';

import * as ImagesAction from '../../store/actions/images';

const SearchBar = () => {
  const [text, setText] = useState('White');

  const [scroll, setScroll] = useState(100);
  const [screen, setScreen] = useState(2000);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch();

  const searchImages = useCallback(async () => {
    console.log(page);
    
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: `${text} cat`,
        page: page,
        per_page: 15
      }
    });
    
    return response;
  }, [text, page]);

  const loadMore = useCallback(async () => {
    setPage(currPage => currPage + 1);
  
    const response = await searchImages();

    dispatch(ImagesAction.loadImages(text, response.data));

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [searchImages, text, dispatch]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setPage(1);
    setScroll(100);
    setScreen(2000);

    dispatch(ImagesAction.clearImages());

    console.log(page);
    
    const response = await searchImages();
    
    dispatch(ImagesAction.loadImages(text, response.data));
  }

  useEffect(() => {
    async function searchInit() {
      const response = await searchImages();

      dispatch(ImagesAction.loadImages(text, response.data));

      setPage(currPage => currPage + 1);
    }
    
    searchInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    if (scroll > (screen - 1200)) {
      if (loading === false) {
        setLoading(true);

        loadMore();

        setScreen(currScreen => currScreen + 1100);
      }
    }
  }, [scroll, screen, loadMore, loading]);

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchBar}
          value={text}
          onChange={({target: { value }}) => setText(value)}
          type="text"
          placeholder="White..."
          autoFocus
        />
        <button
          className={styles.searchButton}
          type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;