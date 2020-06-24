import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('rendering App component and its nested elements', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('rendering the div header in App component', () => {
    expect(component.find('div.header').text()).toBe('Jest & Enzyme testing');
  });

  it('rendering the nested component inside the App component', () => {
    expect(
      component.find('MyComponent').exists() &&
        component.find('Footer').exists()
    ).toBe(true);
  });

  it('snapshot the App component', () => {
    expect(component).toMatchSnapshot();
  });
});
