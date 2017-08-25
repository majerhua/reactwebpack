import React from 'react';
 
export default class Hola extends React.Component {
  render() {
    return (
    	<div className="col-md-8">
	      <nav className="navbar navbar-inverse">
	      	<div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>

			    <ul className="nav navbar-nav">
			      <li className="active"><a href="#">Home</a></li>
			      <li><a href="#">Page 1</a></li>
			      <li><a href="#">Page 2</a></li>
			      <li><a href="#">Page 3</a></li>
			    </ul>
	  		</div>
	      </nav>
	    </div>
    );
  }
}
