import React from "react"
import expect from "expect"
import {shallow} from "enzyme"
import Home from "../src/Home"

describe('Home', () => {
    it('shows the images in the feed', () => {
      const images = [
        "https://images.dog.ceo/breeds/mix/Polo.jpg",
        "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg"
      ]
      const dogRepository = {
        getDogImages: () => images
      }
      const wrapper = shallow(<Home dogRepository={dogRepository}/>)

      expect(wrapper.find('img').length).toEqual(2)
    });
});