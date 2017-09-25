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
    let mockedCloseModal = jest.fn();                      
    let closedComponent = shallow(<WorkExampleModal 
                                    example={testData} 
                                    isOpen={false} />);
    let openComponent = shallow(<WorkExampleModal 
                                    example={testData} 
                                    isOpen={true} 
                                    closeMethod={mockedCloseModal} />);
    let anchors = closedComponent.find("a");
    // console.log(closedComponent.debug());
    

    it("Should have one anchor tag", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should have the correct href attribute", () => {
        expect(anchors.node.props.href).toEqual(testData.href);
    });

    it("Should be closed", () => {
        expect(closedComponent.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
    });

    it("Should be open", () => {
        expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
    });

    it("Should close modal dialog box", () => {
        openComponent.find('.modal__closeButton').simulate('click');       
        expect(mockedCloseModal).toHaveBeenCalled();      
    });

});