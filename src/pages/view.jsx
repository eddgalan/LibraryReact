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

  const itemStyle = {
    container: {
      display: 'flex',
      gap: '20px',
      color: '#FFF',
      width: '800px',
      margin: '0 auto',
    },
  }

  if( !item ) {
    return <Layout> Item not found </Layout>
  } else {
    return (
      <Layout>
        <div style={ itemStyle.container }>
          <div>
            <div>{ item?.cover? <img src={ item.cover } width="400" /> : '' }</div>
          </div>
          <div>
            <h2>{ item?.title }</h2>
            <div>{ item?.author }</div>
            <div>{ item?.intro }</div>
            <div>{ item?.completed ? 'Read':'To read' }</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default View;
