import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageLoading from "../components/utils/page_loading/index.jsx";

const SuspenseComponent = Component => {
  const comp = props => {
    const Comp = lazy(Component);
    return (
      <Suspense fallback={<PageLoading text={"页面加载中..."} />}>
        <Comp {...props} />
      </Suspense>
    );
  };
  comp.displayName = "SuspenseComponent";
  return comp;
};

export const HomeComponent = SuspenseComponent(() =>
  import("../application/Home/index.jsx")
);
export const DetailsComponent = SuspenseComponent(() =>
  import("../application/Details/index.jsx")
);

import Home from "../application/Home/index";
import Details from "../application/Details/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={SuspenseComponent(HomeComponent)} />
          <Route
            path="/details"
            component={SuspenseComponent(DetailsComponent)}
          /> */}
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;