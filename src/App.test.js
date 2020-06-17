import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('rendering the App component', () => {
    const component = shallow(<App />);
    const paragraph = component.find('div.header');
    const result = paragraph.text();

    expect(result).toBe('Jest & Enzyme testing');
  });
});
