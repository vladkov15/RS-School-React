import { useState } from 'react';
import Cards from '../components/Search/Cards';
import Search from '../components/Search/Search';
import DefaultLayout from '../layouts/DefaultLayout';
import { ApiAll } from '../models/types';
import axios from 'axios';
import ModalCard from '../modal/ModalCard';
import '../style/root.css';
import CardModal from '../components/Search/CardModal';

const RootPage = ({}) => {
  const [data, setData] = useState<ApiAll[]>();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ApiAll>();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async (search: string) => {
    const response = await axios.get<{ results: ApiAll[] }>(`https://swapi.dev/api/${search}/`);
    console.log(`https://swapi.dev/api/${search}/`);

    setData(response.data.results);
    setLoading(false);
  };

  return (
    <>
      {!isModalOpen ? (
        <div>
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
            {data && (
              <Cards
                items={data}
                modalOpen={function (item: ApiAll): void {
                  handleOpenModal();
                  setModalData(item);
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          {' '}
          <div className="hide">
            <ModalCard isOpen={isModalOpen} onClose={handleCloseModal}>
              <CardModal data={modalData!} />
            </ModalCard>
          </div>
        </div>
      )}
    </>
  );
};

export default RootPage;
