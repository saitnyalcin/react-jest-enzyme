import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

it('rendering the Footer component', () => {
  const wrap = shallow(<Footer />);
  const paragraph = wrap.find('p');
  const result = paragraph.text();

  expect(result).toBe('I am the footer');
});

it('checks the existence of the footer component', () => {
  const wrap = shallow(<Footer />);
  expect(wrap.exists()).toBe(true);
});

it('confirms the passing props correctly', () => {
  const wrap = shallow(<Footer title={'Footer'} />);
  const title = wrap.find('h1.title').text();
  expect(title).toBe('Footer');
});
