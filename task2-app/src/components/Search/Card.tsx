import { useState } from 'react';
import { ApiAll } from '../../models/types';
import likeSvg from '../../assets/like-svgrepo-com.svg';
import viewSvg from '../../assets/eye-svgrepo-com.svg';
import picture from '../../assets/radial-gradient-top-left.png';
import '../../style/Card.css';

const Card = ({ item }: { item: ApiAll }) => {
  const [likes, setLikes] = useState<number>(0);
  const [views, setViews] = useState<number>(0);

  return (
    <div className="card">
      <div className="card-header-wrapper">
        <div className="card-post">
          <img className="post-img" src={picture} alt="image" />
          {item.name && <p className="post-title">{item.name}</p>}
          {item.title && <p className="post-title">{item.title}</p>}
          {item.birth_year && <p className="post-subtitle">{'дата рождения: ' + item.birth_year}</p>}
          {item.opening_crawl && <p className="post-subtitle">{item.opening_crawl}</p>}
          {item.population && <p className="post-subtitle">{'популяция: ' + item.population}</p>}
        </div>
      </div>
      <div>
        <hr className="hr"></hr>
        <div className="card-footer-wrapper">
          <div className="likes-block">
            <button
              onClick={() => {
                setLikes(likes + 1);
              }}
            >
              {' '}
              <img className="like-img" src={likeSvg} alt="like image" />
              <strong className="card-footer-text">{likes}</strong>
            </button>
          </div>
          <div className="views-block">
            <button
              onClick={() => {
                setViews(views + 1);
              }}
            >
              {' '}
              <img className="views-img" src={viewSvg} alt="views image" />
              <strong className="card-footer-text">{views}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
