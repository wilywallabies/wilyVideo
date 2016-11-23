import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer'
const Main = React.createClass({
  render(){
    return (
      <div>
        <h1>
          <Link to="/">WilyVideo</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    )
  }
});

export default Main;
