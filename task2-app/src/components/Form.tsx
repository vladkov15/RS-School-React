import React, { Component, ReactNode } from 'react';

interface FormState {
  name: string;
  second_name: string;
  date: string;
  country: string;
  sex: string;
  image: string;
}

class Form extends Component<{ setForm: () => void }, FormState> {
  constructor(props: { setForm: () => void }) {
    super(props);

    this.state = {
      name: '',
      second_name: '',
      date: '',
      country: '',
      sex: '',
      image: '',
    };
  }
   
  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  
  onCountryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        country: event.target.value,
    });
  };

  onSexChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        sex: event.target.value,
    });
  };


  submitForm(event: React.FormEvent) {
    event.preventDefault();
    if (!localStorage.forms) {
      localStorage.setItem('forms', JSON.stringify([this.state]));
      this.props.setForm();
      return;
    }
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), this.state]);
    this.props.setForm();
  }


  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div>
          <div>
            <label>
              Name
              <input
                name="name"
                value={this.state.name}
                onInput={this.onChangeInput}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Second-Name
              <input
                name="second_name"
                value={this.state.second_name}
                onInput={this.onChangeInput}
                type="text"
                required
              />
            </label>
          </div>
          <div>
            <label>
              BirthDate
              <input
                name="date"
                defaultValue={this.state.date}
                onInput={this.onChangeInput}
                type="date"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Choose a country:
              <select name="country" onChange={this.onCountryChangeHandler} required>
                <option value="Belarus">Belarus</option>
                <option value="Russian">Russian</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div>
          <fieldset>
            <legend>Sex</legend>
            <label>
              <input
                name="sex"
                type="radio"
                value="male"
                checked={this.state.sex === 'male'}
                onChange={this.onSexChangeHandler}
                data-heard="Male"
              />
              Male
            </label>
            <label>
              <input
                name="sex"
                type="radio"
                value="female"
                checked={this.state.sex === 'female'}
                onChange={this.onSexChangeHandler}
                data-heard="Female"
              />
              Female
            </label>
          </fieldset>
          </div>
          <input id="file_img" type="file" required />
          <button  type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
