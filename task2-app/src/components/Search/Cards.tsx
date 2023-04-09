import Card from './Card';
import '../../style/Cards.css';
import { ApiAll } from '../../models/types';
import { FC } from 'react';

interface CardsProps {
  items: ApiAll[];
  modalOpen: (item: ApiAll) => void;
}

const Cards: FC<CardsProps> = ({ items, modalOpen }) => {
  return (
    <div className="cards">
      {items.map((item, index) => {
        return <Card item={item} key={index} modalOpen={() => modalOpen(item)} />;
      })}
    </div>
  );
};

export default Cards;
