import React, { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import DefaultLayout from '../layouts/DefaultLayout';
import { ICard } from '../models/types';
import { data } from '../data/data';

const RootPage = () => {
  const [items, setItems] = useState<ICard[]>(data);

  return (
    <>
      <div>
        <DefaultLayout />
        <h1 className="header">Home Page</h1>
        <Search search={'dknvkd'} />
        <br />
        <Cards items={items} />
      </div>
    </>
  );
};

export default RootPage;
