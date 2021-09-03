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

export const history = createBrowserHistory();

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
