import React, { Fragment } from "react";
import Carousel from "./components/Carousel";
import SearchMovie from "./components/SearchMovie";
import MovieList from "./components/MovieList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieList, fetchTheaterList } from "./homeSlice";
import TheaterPC from "./components/TheaterPC";
import TheaterMobile from "./components/TheaterMobile";
import useViewport from "hooks/useViewport";
import { ticketActions } from "features/TicketRoom/ticketSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { width } = useViewport();

  const breakpoint = 767;
  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(ticketActions.removeTicketStore());
  }, []);

  return (
    <Fragment>
      <Carousel />
      <SearchMovie />
      <MovieList />
      {width < breakpoint ? <TheaterMobile /> : <TheaterPC />}
    </Fragment>
  );
};

export default Home;
