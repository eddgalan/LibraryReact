import React from 'react';
import { useAppContext } from '../store/store';
import Layout from '../components/layout';

function Index() {
  const store = useAppContext();

  return (
    <Layout>
      { store.items.map((item) => (<div>{ item.title }</div>)) }
    </Layout>
  );
}

export default Index;
