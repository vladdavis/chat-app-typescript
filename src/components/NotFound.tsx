import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notFound">
    Sorry, there's no such page.
    Go to <Link to="/">main page</Link>
  </div>
)

export default NotFound;
