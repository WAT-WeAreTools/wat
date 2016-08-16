// import React from 'react';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     );
//   }
// }











import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Card>
  <CardHeader
    title="URL Avatar"
    subtitle="Subtitle"
    avatar="images/jsa-128.jpg"
  />
  <CardMedia
    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
  >
    <img src="images/nature-600-337.jpg" />
  </CardMedia>
  <CardTitle title="Card title" subtitle="Card subtitle" />
  <CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </CardText>
  <CardActions>
    <FlatButton label="Action1" />
    <FlatButton label="Action2" />
  </CardActions>
</Card>
      </MuiThemeProvider>
    );
  }
}

export default Main;








//
// import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };
//
// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
//
// class Main extends Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.handleRequestClose = this.handleRequestClose.bind(this);
//     this.handleTouchTap = this.handleTouchTap.bind(this);
//
//     this.state = {
//       open: false,
//     };
//   }
//
//   handleRequestClose() {
//     this.setState({
//       open: false,
//     });
//   }
//
//   handleTouchTap() {
//     this.setState({
//       open: true,
//     });
//   }
//
//   render() {
//     const standardActions = (
//       <FlatButton
//         label="Ok"
//         primary={true}
//         onTouchTap={this.handleRequestClose}
//       />
//     );
//
//     return (
//       <MuiThemeProvider muiTheme={muiTheme}>
//         <div style={styles.container}>
//           <Dialog
//             open={this.state.open}
//             title="Super Secret Password"
//             actions={standardActions}
//             onRequestClose={this.handleRequestClose}
//           >
//             Hello World
//           </Dialog>
//           <h1>Material-UI</h1>
//           <h2>WAT</h2>
//           <RaisedButton
//             label="Super Secret Password"
//             secondary={true}
//             onTouchTap={this.handleTouchTap}
//           />
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default Main;
