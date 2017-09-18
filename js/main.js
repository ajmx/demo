import React from 'react';
import ReactDOM from 'react-dom';
import WorkExamples from './work-examples';

const workExamples = [
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
    },
    {
        'title': 'Work Example',
        'image': {
            'alt': 'example screenshot of a project involving cats',
            'src': 'images/example3.png',
            'comment':`<!-- Bengal cat” by roberto shabs is licensed under CC BY 2.0
               https://www.flickr.com/photos/37287295@N00/2540855181 -->`
        }
    },
]

ReactDOM.render(<WorkExamples examples={workExamples} />, document.querySelector('#work-examples'));
