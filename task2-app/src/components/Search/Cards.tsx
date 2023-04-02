import { Component } from 'react';
import { ICard } from '../../models/types';
import Card from './Card';
import '../../style/Cards.css';

class Cards extends Component<{ items: ICard[] }> {
  render() {
    return (
      <div className="cards">
        {this.props.items.map((item) => {
          return <Card item={item} key={item.title} />;
        })}
      </div>
    );
  }
}

export default Cards;
