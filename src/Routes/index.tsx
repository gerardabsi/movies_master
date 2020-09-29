import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Navigation } from '../Components/Organisms/Navigation/Navigation';
import { Search } from '../Pages/Search/Search';

export const Routes: React.FC = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </>
);
