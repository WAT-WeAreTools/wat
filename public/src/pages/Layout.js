import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
render(){
  return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" alt="Brand" src="images/logo.png" />
                    </Link>
                    <div className="header-text">
                        <div className="title">
                            <Link to="resources">Resources</Link>
                            <p>We Are Tools</p>
                        </div>
                        <p>Tools for learning web development. Ranked by users, so you can quickly find the best stuff out there.</p>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-3 sidebar">
                    <p>Stuff stuff and more stuff</p>
                </div>
            </div>
        </div>
        {this.props.children}
      </div>
    );
    }

};
export default Layout;
