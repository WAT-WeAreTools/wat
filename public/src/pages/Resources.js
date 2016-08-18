import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router';
import ResourceCard from '../components/resource-card';
import FunFun from '../components/funfun';


class Resources extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <h1>JavaScript</h1>
        <Link to="resources">Resources</Link>
        <ResourceCard />
        <h1>popcorn</h1>
        
      </div>

       </MuiThemeProvider>
    );
  }
}

export default Resources;
