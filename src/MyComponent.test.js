import { shallow } from 'enzyme';
import React from 'react';
import MyComponent from './MyComponent';
import Footer from './Footer';

it('comparison to matching element in the component', () => {
  const wrap = shallow(<MyComponent />);
  expect(
    wrap.containsMatchingElement(<h1>This is the my component</h1>)
  ).toBeTruthy();
});

it('finds the text of the specified button class', () => {
  const wrap = shallow(<MyComponent />);
  expect(wrap.find('.my-button').text()).toEqual('Submit');
  //   expect(wrap).toMatchSnapshot();
});

it('checks the class name called container of the div', () => {
  const wrap = shallow(<MyComponent />);
  expect(wrap.find('div.container').hasClass('container'));
});

it('verifies the button className called my-button', () => {
  const wrap = shallow(<MyComponent />);
  expect(wrap.find('button').hasClass('my-button'));
});

it('increment of the number', () => {
  const wrap = shallow(<MyComponent />);
  const total1 = wrap.find('h2.number').text();
  const button = wrap.find('button');
  expect(total1).toBe('0');

  button.simulate('click');
  const total2 = wrap.find('h2.number').text();

  expect(total2).toBe('1');
});

it('checks the existence of the footer component', () => {
  const wrap = shallow(<MyComponent />);
  const footer = wrap.find(Footer);
  expect(footer.exists()).toBe(true);
});
