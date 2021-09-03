import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

const HomeLayout = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={routeProps => {
        return (
          <Fragment>
            <Header />
            <Component {...routeProps} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

export default HomeLayout;
