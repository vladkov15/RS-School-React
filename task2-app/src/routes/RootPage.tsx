import { Component } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Search from '../components/Search';
import DefaultLayout from '../layouts/DefaultLayout';
import { ICard } from '../models/types';
import { data } from '../data/data';



class RootPage extends Component<object, { items: ICard[] }> {

  constructor(props: object) {
    super(props);
    this.state = { items: data };
  }
  render() {
    return (
      <>
        <div>
          <DefaultLayout />
          <h1 className="header">Home Page</h1>
          <Search search={'dknvkd'} />
          <br/>
          <Cards items={this.state.items} />
        </div>
      </>
    );
  }
}
export default RootPage;
