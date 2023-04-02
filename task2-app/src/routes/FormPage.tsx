import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import FormCard from '../components/FormCard';
import { IForm } from '../models/types';
import DefaultLayout from '../layouts/DefaultLayout';

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
        <Form setForm={setForm} />
        <div>
          <p>Submitted forms</p>
          <div>
            {forms.map((form, i) => {
              return <FormCard data={form} key={form.name + i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
