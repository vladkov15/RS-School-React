import React, { useState, useEffect } from 'react';

import FormCard from '../components/Form/FormCard';
import { IForm } from '../models/types';
import DefaultLayout from '../layouts/DefaultLayout';
import MyForm from '../components/Form/MyForm';

const FormsPage = () => {
  const [forms, setForms] = useState<IForm[]>([]);

  useEffect(() => {
    const storedForms = JSON.parse(localStorage.forms || '[]');
    setForms(storedForms);
  }, []);

  const setForm = () => {
    const storedForms = JSON.parse(localStorage.forms || '[]');
    setForms(storedForms);
  };

  return (
    <>
      <DefaultLayout />
      <div>
        <h1>Forms Page</h1>
        <MyForm onSubmit={setForm} />
        <div>
          <p>Submitted forms</p>
          <div>
            {forms.map((form, i) => {
              return <FormCard data={form} key={form.firstName + i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
