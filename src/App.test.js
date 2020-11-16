import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";

it('renders without crashing', () => {
    shallow(<App />);
});


const h1Text = 'Hello Word!!';
it(`should able to find an html element h1 with text ${h1Text} `, () => {
    const app = shallow(<App />);

    expect(app.find('h1').length).toBe(1);
    expect(app.find('h1').html()).toContain(h1Text);
    expect(app.containsMatchingElement(<h1>{h1Text}</h1>)).toEqual(true)
});
