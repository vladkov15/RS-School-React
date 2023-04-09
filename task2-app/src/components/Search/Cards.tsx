import Card from './Card';
import '../../style/Cards.css';
import { ApiAll } from '../../models/types';
import { FC } from 'react';

interface CardsProps{
  items: ApiAll[] 
}

const Cards:FC<CardsProps> = ({items} ) => {
  return (
    <div className="cards">
      {items.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

export default Cards;
