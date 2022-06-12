import React from 'react';
import NavBar from './navbar';

function Layout({ children }) {
  const containerStyle = {
    width: '90%',
    margin: '100px auto',
  };

  return(
    <div>
      <NavBar />
      <div style={ containerStyle }>{ children }</div>
    </div>
  );
}
export default Layout;
