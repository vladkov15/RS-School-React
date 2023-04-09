import { useEffect, useState } from 'react';
import Cards from '../components/Search/Cards';
import Search from '../components/Search/Search';
import DefaultLayout from '../layouts/DefaultLayout';
import { ApiAll } from '../models/types';
import axios from 'axios';

const RootPage = ({}) => {
  const [data, setData] = useState<ApiAll[]>();
  const [loading, setLoading] = useState(false);

  const fetchData = async (search: string) => {
    const response = await axios.get<{ results: ApiAll[] }>(`https://swapi.dev/api/${search}/`);
    console.log(`https://swapi.dev/api/${search}/`);

    setData(response.data.results);
    setLoading(false);
  };

  return (
    <>
      <div>
        <DefaultLayout />
        <h1 className="header">Home Page</h1>
        <Search
          onSearch={function (data: string): void {
            fetchData(data);
            setLoading(true);
          }}
        />
        <br />
        {loading && <p>Loading data...</p>}
        {data && <Cards items={data} />}
      </div>
    </>
  );
};

export default RootPage;
