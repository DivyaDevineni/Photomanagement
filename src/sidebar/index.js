import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <Link to='/searchphotos'>Search </Link>

        <Link to='/unlikedphotos'>Unliked </Link>
      </div>
    );
  }
}

export default Sidebar;
