import { FC } from 'react';
import { ICard } from '../../models/types';
import Card from './Card';
import '../../style/Cards.css';
import { data } from '../../data/data';


interface CardsProps{
  item: ICard[]
}

const Cards = () => {
  return (
    <div className="cards">
      {data.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

export default Cards;
