import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Nav from "./Nav";

Enzyme.configure({ adapter: new Adapter() });

describe(`Components Nav`, () => {

    test('renders without crashing', () => {
        shallow(<Nav />);
    });

    test("Should have form ul => li", () => {
        const list = [{ text: "...", href:"..."}];
        const nav = shallow(<Nav value={list} />);

        nav.setProps({value : [{text:".", href: ".."}] });

        expect(nav.find("ul").exists()).toBe(true);
        expect(nav.find("ul").find("li").exists()).toBe(true);
        expect( nav.find("ul").find("li").find("Link").exists() ).toBe(true);
    });

});