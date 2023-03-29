import React, { Component } from 'react';

interface FormState {
  name: string | undefined;
  second_name: string | undefined;
  date: string | undefined;
  country: string | undefined;
  sex: string | undefined;
  image: string | undefined;
}

class Form extends Component<{ setForm: () => void }, FormState> {
  inputName: React.RefObject<HTMLInputElement>;
  inputSecondName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  selectCountry: React.RefObject<HTMLSelectElement>;
  inputSex: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  constructor(props: { setForm: () => void }) {
    super(props);
    this.inputName = React.createRef();
    this.inputSecondName = React.createRef();
    this.inputDate = React.createRef();
    this.selectCountry = React.createRef();
    this.inputSex = React.createRef();
    this.inputFile = React.createRef();
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

  onChangeName = () => {
    this.setState({
      name: this.inputName.current?.value,
    });
  };

  onChangeSecondName = () => {
    this.setState({
      second_name: this.inputSecondName.current?.value,
    });
  };

  onChangeDate = () => {
    this.setState({
      date: this.inputDate.current?.value,
    });
  };

  onChangeCountry = () => {
    this.setState({
      country: this.selectCountry.current?.value,
    });
  };

  onChangeSex = () => {
    this.setState({
      sex: this.inputSex.current?.value,
    });
  };

  onChangeFile = () => {
    this.setState({
      image: URL.createObjectURL(this.inputFile.current!.files![0]),
    });
  };

  clearForm = () => {
    if (this.inputName.current) this.inputName.current.value = '';
    if (this.inputSecondName.current) this.inputSecondName.current.value = '';
    if (this.inputDate.current) this.inputDate.current.value = '';
    if (this.inputSex.current) this.inputSex.current.value = '';
    if (this.inputFile.current) this.inputFile.current.value = '';
  };
  submitForm(event: React.FormEvent) {
    event.preventDefault();
    if (!localStorage.forms) {
      localStorage.setItem('forms', JSON.stringify([this.state]));
      this.props.setForm();
      this.clearForm;
      return;
    }
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), this.state]);
    this.clearForm;
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
                ref={this.inputName}
                onInput={this.onChangeName}
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
                ref={this.inputSecondName}
                onInput={this.onChangeSecondName}
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
                ref={this.inputDate}
                onInput={this.onChangeDate}
                type="date"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Choose a country:
              <select
                name="country"
                ref={this.selectCountry}
                onChange={this.onChangeCountry}
                required
              >
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
                  ref={this.inputSex}
                  onChange={this.onChangeSex}
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
                  ref={this.inputSex}
                  onChange={this.onChangeSex}
                  data-heard="Female"
                />
                Female
              </label>
            </fieldset>
          </div>
          <input ref={this.inputFile} onChange={this.onChangeFile} type="file" required />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
