import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  country: string;
  gender: string;
  image: File | null;
}
interface MyFormProps {
  onSubmit: () => void;
}

const MyForm: React.FC<MyFormProps>  = ({ onSubmit }) => {
  

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    country: '',
    gender: '',
    image: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFormData({ ...formData, image: event.target.files[0] });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!localStorage.forms) {
      localStorage.setItem('forms', JSON.stringify([formData]));
      onSubmit()
      return;
    }
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), formData]);
    onSubmit()
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <DatePicker selected={formData.dateOfBirth} onChange={handleDateChange} />
        
      </label>
      <br />
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
      </label>
      <br />
      <label>
        Gender:
        <input type="radio" name="gender" value="male" onChange={handleInputChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleInputChange} /> Female
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;