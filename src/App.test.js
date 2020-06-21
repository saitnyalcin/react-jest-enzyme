import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('rendering the div header in App component', () => {
    const component = shallow(<App />);
    const paragraph = component.find('div.header');
    const result = paragraph.text();

    expect(result).toBe('Jest & Enzyme testing');
  });
});

describe('render nested component', () => {
  it('rendering the nested component inside the App component', () => {
    const wrapper = shallow(<App />);
    const myComponent = wrapper.find('MyComponent').exists();
    const footer = wrapper.find('Footer').exists();

    expect(myComponent && footer).toBe(true);
  });
});
