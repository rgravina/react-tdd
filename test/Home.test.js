import React from "react"
import assert from "assert"
import {shallow} from "enzyme"
import Home from "../src/Home"

describe('Home', () => {
    it('renders', () => {
      const wrapper = shallow(<Home/>)
    });
});