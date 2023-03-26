import { Component } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout />
        <h1>404</h1>
      </div>
    );
  }
}

export default ErrorPage;
