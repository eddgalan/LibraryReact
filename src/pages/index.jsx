import React from 'react';
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import Book from '../components/book';

function Index() {
  const store = useAppContext();
  const booksContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  return (
    <Layout>
      <div style={ booksContainer }>
        { store.items.map((item) => (<Book key={ item.id } item={ item } /> )) }
      </div>
    </Layout>
  );
}

export default Index;
