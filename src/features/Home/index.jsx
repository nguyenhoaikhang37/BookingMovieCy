import React, { Fragment } from 'react';
import Carousel from './components/Carousel';
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovieList } from './homeSlice';
import Theater from './components/Theater';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, []);

  return (
    <Fragment>
      <Carousel />
      <SearchMovie />
      <MovieList />
      <Theater />
    </Fragment>
  );
};

export default Home;
