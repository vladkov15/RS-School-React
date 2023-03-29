import React from 'react';

import { IForm } from '../models/types';

interface IFormCardProps {
  data: IForm;
}

 const FormCard = ({ data}: IFormCardProps) => {
  return (
        <div>
          <img id={data.image} width="300px" height="300px"/>
          <p>Name: { data.name}</p>
          <p>Second-Name: { data.second_name}</p>
          <p>Date: {data.date}</p>
          <p>From: {data.country}</p>
          <p>Sex: {data.sex}</p>
        </div>
  );
};

export default FormCard