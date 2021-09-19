import "./App.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFound from "components/Common/NotFound";
import HomeLayout from "components/Layout/HomeLayout";
import Home from "features/Home";
import Detail from "features/Detail";
import { Fragment } from "react";
import Loading from "components/Common/Loading";
import { useState } from "react";
import { useEffect } from "react";
import TicketRoom from "features/TicketRoom";
import Auth from "features/Auth";
import { useDispatch } from "react-redux";
import { getUserToken } from "features/Auth/authSlice";
import Profile from "features/Profile";

export const history = createBrowserHistory();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserToken());
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Router history={history}>
          <Switch>
            <Redirect exact from="/" to="home" />

            <HomeLayout path="/home" Component={Home} />
            <HomeLayout path="/detail/:maPhim" Component={Detail} />

            <Route path="/ticketroom/:id">
              <TicketRoom />
            </Route>

            <Route path="/login">
              <Auth />
            </Route>

            <HomeLayout path="/profile" Component={Profile} />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
