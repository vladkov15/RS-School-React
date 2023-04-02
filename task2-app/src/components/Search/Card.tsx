import { Component } from 'react';
import { ICard } from '../../models/types';
import likeSvg from '../../assets/like-svgrepo-com.svg';
import viewSvg from '../../assets/eye-svgrepo-com.svg';
import picture from '../../assets/radial-gradient-top-left.png';
import '../../style/Card.css';

class Card extends Component<
  { item: ICard; key: string },
  {
    likes: number;
    views: number;
  }
> {
  constructor(props: { item: ICard; key: string }) {
    super(props);
    this.state = {
      likes: 0,
      views: 0,
    };
  }

  render() {
    const item = this.props.item;
    return (
      <div className="card">
        <div className="card-header-wrapper">
          <div className="card-post">
            <img className="post-img" src={picture} alt="image" />
            <p className="post-title">{item.title}</p>
            <p className="post-subtitle">{item.subtitle}</p>
          </div>
        </div>
        <div>
          <hr className="hr"></hr>
          <div className="card-footer-wrapper">
            <div className="likes-block">
              <img className="like-img" src={likeSvg} alt="like image" />
              <strong className="card-footer-text">{this.state.likes}</strong>
            </div>
            <div className="views-block">
              <img className="views-img" src={viewSvg} alt="views image" />
              <strong className="card-footer-text">{this.state.views}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
