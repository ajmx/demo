import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';
import WorkExamples  from '../js/work-examples';
import { WorkExample } from '../js/work-examples';

const testData = [
    {
        'title': 'Work Example',
        'image': {
            'alt': 'example screenshot of a project involving code',
            'src': 'images/example1.png',
            'comment':'',
        }
    },
    {
        'title': 'Work Example',
        'image': {
            'alt': 'example screenshot of a project involving chemistry',
            'src': 'images/example2.png',
            'comment':'',
        }
    }
]

describe("WorkExamples component", () => {
    
    let allExamples = shallow(<WorkExamples examples={testData} />);
    console.log(allExamples.debug());

    it("Should have a section element", () => {
        expect(allExamples.type()).toEqual("section");
    });

    it("Should have the same number of children as work examples", () => {
        expect(allExamples.find("WorkExample").length).toEqual(testData.length);
    });
})

describe("WorkExample component", () => {
    let oneExample = shallow(<WorkExample work={testData[0]} />);
    console.log(oneExample.debug());
    let images = oneExample.find("img");
    console.log(images.node.props);   

    it("Should have one image", () => {
        expect(images.length === 1)
    });

    it("Should have correct image src", () => {
        expect(images.node.props.src).toEqual(testData[0].image.src);
    });

});