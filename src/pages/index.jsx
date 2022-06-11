import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../store/store';

function Index() {
  const store = useAppContext();

  return (
    <div>
      <Link to="/create"> Home </Link>
      { store.items.map((item) => (<div>{ item.title }</div>)) }
    </div>
  );
}

export default Index;
