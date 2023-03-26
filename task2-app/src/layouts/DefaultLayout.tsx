import { Link } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      |
      <Link to="/about">About</Link>
      |
      <Link to="/form">Form</Link>
    </div>
  );
};

export default DefaultLayout;
