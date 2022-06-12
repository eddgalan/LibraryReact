import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import { useAppContext } from '../store/store';

function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if( !item ) {
    return <Layout> Item not found </Layout>
  }

  return (
    <Layout>
      <h2>{ item?.title }</h2>
      <div>{ item?.cover? <img src={ item.cover } width="400" /> : '' }</div>
      <div>{ item?.author }</div>
      <div>{ item?.intro }</div>
      <div>{ item?.completed ? 'Read':'To read' }</div>
    </Layout>
  );
}

export default View;
