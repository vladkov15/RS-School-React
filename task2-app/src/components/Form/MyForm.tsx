import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

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

const MyForm: React.FC<MyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    country: '',
    gender: '',
    image: null,
  });
  const [refData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    country: '',
    gender: '',
    image: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm<FormData>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFormData({ ...formData, image: event.target.files[0] });
    }
  };

  const handleChange = () => {
    if (!localStorage.forms) {
      localStorage.setItem('forms', JSON.stringify([formData]));
      onSubmit();
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        country: '',
        gender: '',
        image: null,
      });
      return;
    }
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), formData]);
    onSubmit();
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      country: '',
      gender: '',
      image: null,
    });
    console.log(formData);
  };

  const omSubmit = handleSubmit(() => {
    handleChange();
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState, refData, reset]);

  return (
    <form onSubmit={omSubmit}>
      <label>
        First Name:
        <input
          {...register('firstName', {
            required: 'fill in',
            minLength: { value: 3, message: '>= 3 letters' },
          })}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <div className="alert-message">{errors.firstName?.message}</div>
      </label>
      <br />
      <label>
        Last Name:
        <input
          {...register('lastName', {
            required: 'fill in',
            minLength: { value: 3, message: '>= 3 letters' },
          })}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <div className="alert-message">{errors.lastName?.message}</div>
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          {...register('dateOfBirth', {
            required: 'fill in',
          })}
          type="date"
          name="dateOfBirth"
          onChange={handleDateChange}
        />
        <div className="alert-message">{errors.dateOfBirth?.message}</div>
      </label>
      <br />
      <label>
        Country:
        <select
          {...register('country', { required: 'Select at list one option' })}
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
        <div className="alert-message">{errors.country?.message}</div>
      </label>
      <br />
      <label>
        Gender:
        <input
          {...register('gender', { required: 'Select one option' })}
          type="radio"
          name="gender"
          value="male"
          onChange={handleInputChange}
        />{' '}
        Male
        <input
          {...register('gender', { required: 'Select one option' })}
          type="radio"
          name="gender"
          value="female"
          onChange={handleInputChange}
        />{' '}
        Female
        <div className="alert-message">{errors.gender?.message}</div>
      </label>
      <br />
      <label>
        Image:
        <input
          {...register('image', { required: 'Select file' })}
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        <div className="alert-message">{errors.image?.message}</div>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
