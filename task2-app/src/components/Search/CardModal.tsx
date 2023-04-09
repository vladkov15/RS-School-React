import { FC } from 'react';
import { ApiAll } from '../../models/types';

interface CardModalProp {
  data: ApiAll;
}

const CardModal: FC<CardModalProp> = ({ data }) => {
  return (
    <div>
      {data.title && <p>{'title: ' + data.title}</p>}
      {data.opening_crawl && <p>{'opening_crawl: ' + data.opening_crawl}</p>}
      {data.director && <p>{'director: ' + data.director}</p>}
      {data.producer && <p>{'producer: ' + data.producer}</p>}
      {data.release_date && <p>{'release date: ' + data.release_date}</p>}
      {data.name && <p>{'name: ' + data.name}</p>}
      {data.height && <p>{'height: ' + data.height}</p>}
      {data.mass && <p>{'mass: ' + data.mass}</p>}
      {data.hair_color && <p>{'hair colorr: ' + data.hair_color}</p>}
      {data.eye_color && <p>{'eye color: ' + data.eye_color}</p>}
      {data.gender && <p>{'gender: ' + data.gender}</p>}
      {data.climate && <p>{'climate: ' + data.climate}</p>}
      {data.terrain && <p>{'terrain: ' + data.terrain}</p>}
      {data.population && <p>{'population: ' + data.population}</p>}
      {/* {Object.keys(data).map((key) => (
        <div key={key}>{`${key}:  ${data[`${key}`]}`}</div>
      ))} */}
    </div>
  );
};

export default CardModal;
