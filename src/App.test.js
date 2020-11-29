import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
    shallow(<App />);
});


describe(`should by have tag h1`, () => {
    const h1Text = 'Hello Word!!';

    test(`should able to find an html element h1 with text ${h1Text} `, () => {
    const app = shallow(<App />);

    expect(app.find('h1').length).toBe(1);
    expect(app.find('h1').html()).toContain(h1Text);
    expect(app.containsMatchingElement(<h1>{h1Text}</h1>)).toEqual(true)
    });
});

describe(`should by have Nav`, () => {
    test("renders App should have Nav", () => {
        const app = shallow(<App />);

        expect(app.find("Nav")).toHaveLength(1);
    });
});
