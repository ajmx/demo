import React from 'react'
import { shallow } from 'enzyme'
import WorkExampleModal from '../js/work-example-modal'

const testData = {
    'title': 'Work Example',
    'description': 'A project involving code',
    'href': 'https://xxxx.yyyy.zzz',
    'image': {
        'alt': 'example screenshot of a project involving code',
        'src': 'images/example1.png',
        'comment': '',
    }
}

describe("Modal component", () => {
    let component = shallow(<WorkExampleModal example={testData} />);
    let anchors = component.find("a");
    console.log(component.debug());

    it("Should have one anchor tag", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should have the correct href attribute", () => {
        expect(anchors.node.props.href).toEqual(testData.href);
    });
});