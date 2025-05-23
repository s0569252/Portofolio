import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/footer'; // Update the path based on your project structure

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});