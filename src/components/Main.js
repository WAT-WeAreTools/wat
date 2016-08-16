import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ResourceCard from './resource-card';


class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <h1>JavaScript</h1>

        <ResourceCard />
      </div>

       </MuiThemeProvider>
    );
  }
}

export default Main;
