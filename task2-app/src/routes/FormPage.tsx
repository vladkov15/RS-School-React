import React, { Component } from 'react';

import  Form  from '../components/Form';
import  FormCard  from '../components/FormCard';

import { IForm } from '../models/types';
import DefaultLayout from '../layouts/DefaultLayout';

 class FormsPage extends Component<Record<string, never>, { forms: IForm[] }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      forms: JSON.parse(localStorage.forms || '[]'),
    };
    this.setForm = this.setForm.bind(this);
  }

  setForm() {
    this.setState({ forms: JSON.parse(localStorage.forms) });
  }

  render() {
    return (
      <>
        <DefaultLayout />
        <div>
          <h1>Forms Page</h1>
          <Form setForm={this.setForm} />
          <div>
            <p>Submited forms</p>
            <div>
              {this.state.forms.map((form, i) => {
                return <FormCard data={form}  key={form.name+i} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FormsPage