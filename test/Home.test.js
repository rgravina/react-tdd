import React from "react"
import assert from "assert"
import expect from "expect"
import {shallow} from "enzyme"
import Home from "../src/Home"

describe('Home', () => {
    it('renders', () => {
      const wrapper = shallow(<Home/>)

      expect(wrapper.text()).toContain("Hello World")
    });
});