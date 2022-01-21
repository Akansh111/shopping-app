import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Product from "./screens/Product";
import Login from "./screens/Login";
import MainLayout from "./screens/MainLayout";
import Register from "./screens/Register";
import store from "./store/store";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" render={() => <Redirect to="/" />} />
          </Switch>
        </MainLayout>
      </HashRouter>
    </Provider>
  );
};

export default App;
