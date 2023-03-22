import { Component } from 'react';
import Search from '../components/Search';
import DefaultLayout from '../layouts/DefaultLayout';

class Root extends Component {
  render() {
    return (
      <>
        <div>
          <DefaultLayout />
          <h1 className="header">Home Page</h1>
          <Search />
        </div>
      </>
    );
  }
}
export default Root;
