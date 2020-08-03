// Internal lib dependencies
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import routes from './routes';
import './App.css';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>
            {routes.map((route, idx) =>
              route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(routeProps) => (
                    <route.component {...routeProps} />
                  )}
                />
              ) : (null))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
