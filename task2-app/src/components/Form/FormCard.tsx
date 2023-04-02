import { IForm } from '../../models/types';
import '../../style/Form.css'

interface IFormCardProps {
  data: IForm;
}
function normilizeDate(data: Date) {
  const date = data.toString().split('T');
  return date[0];
}
const FormCard = ({ data }: IFormCardProps) => {
  return (
    <div className='form-card'>
      <img width="150px" height="150px" />
      <p>Name: {data.firstName}</p>
      <p>Second-Name: {data.lastName}</p>
      <p>Date: {normilizeDate(data.dateOfBirth)}</p>
      <p>From: {data.country}</p>
      <p>Sex: {data.gender}</p>
    </div>
  );
};

export default FormCard;
