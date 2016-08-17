import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


// import Favorites from './pages/Favorites';
import Index from './pages/Index';
import Resources from './pages/Resources';
import Layout from './pages/Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(<Main />, document.getElementById('app'));
render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="resources" component={Resources}></Route>
      {/* <Route path="favorites" component={Favorites}></Route> */}
    </Route>
  </Router>,
  document.getElementById('app'));
