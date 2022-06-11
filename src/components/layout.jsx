import React from 'react';
import NavBar from './navbar';

function Layout({ children }) {
  return(
    <div>
      <NavBar />
      <div>{ children }</div>
    </div>
  );
}
export default Layout;
