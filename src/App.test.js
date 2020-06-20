import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('rendering the App component', () => {
    const component = shallow(<App />);
    const paragraph = component.find('div.header');
    const result = paragraph.text();

    expect(result).toBe('Jest & Enzyme testing');
  });
});

describe('render nested component', () => {
  it('rendering the App component', () => {
    const wrapper = shallow(<App />);
    const myComponent = wrapper.find('MyComponent');
    const footer = wrapper.find('Footer');

    expect(myComponent.exists() && footer.exists()).toBe(true);
  });
});
