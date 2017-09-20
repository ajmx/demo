import React from 'react';
import ReactDOM from 'react-dom';
import WorkExamples from './work-examples';

const workExamples = [
    {
        'title': 'Work Example',
        'description': 'A project involving code',
        'href': '/demo',
        'image': {
            'alt': 'example screenshot of a project involving code',
            'src': 'images/example1.png',
            'comment':'',
        }
    },
    {
        'title': 'Work Example',
        'description': 'A project involving machine learning',
        'href': '/demo',
        'image': {
            'alt': 'example screenshot of a project involving machine learning',
            'src': 'images/example2.png',
            'comment':'',
        }
    },
    {
        'title': 'Work Example',
        'description': 'A project involving communication',
        'href': '/demo',
        'image': {
            'alt': 'example screenshot of a project involving communication',
            'src': 'images/example3.png',
            'comment':``
        }
    },
]

ReactDOM.render(<WorkExamples examples={workExamples} />, document.querySelector('#work-examples'));
