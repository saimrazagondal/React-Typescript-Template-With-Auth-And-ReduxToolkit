import React from 'react';
import { Redirect } from 'react-router-dom';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return <Redirect to="/login" />;
};

export default Home;
