import { FC } from 'react';
import Cards from '../components/Search/Cards';
import Search from '../components/Search/Search';
import DefaultLayout from '../layouts/DefaultLayout';
import { ICard } from '../models/types';

interface RootPageProps {
  items: ICard[];
}

const RootPage: FC<RootPageProps> = ({}) => {
  return (
    <>
      <div>
        <DefaultLayout />
        <h1 className="header">Home Page</h1>
        <Search />
        <br />
        <Cards />
      </div>
    </>
  );
};

export default RootPage;
