
import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';
import Review from './Review';
import styled from 'styled-components'

class SimpleForm extends Component {
    render() {
        return (
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'What is your name?',
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}!',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        message: 'Enter ur email please',
                        trigger: 'email',
                    },
                    {
                        id: 'email',
                        user: true,
                        trigger: '4',
                    },
                    {
                        id: '4',
                        message: ' What is your interest?',
                        trigger: 'int',
                    },
                    {
                        id: 'int',
                        options: [
                            { value: 'Addmission', label: 'Addmission', trigger: 'add' },
                            { value: 'Infrastructure', label: 'Infrastructure', trigger: 'infra' },
                        ],
                    },
                    {
                        id: 'add',
                        message: 'I can help you with admission inquiries. Which program are you interested in?',
                        trigger: 'pgm',
                    },
                    {
                        id: 'infra',
                        message: 'The institute campus is located in 16 acres . Which blocks are you interested in?',
                        trigger: 'block',
                    },
                    {
                        id: 'pgm',
                        options: [
                            { value: 'Under Graduate', label: 'Under Graduate',trigger:'ug' },
                            { value: 'Post Graduate', label: 'Post Graduate',trigger:'Pg'},
                        ],
                    }, 
                    {
                        id: 'block',
                        options: [
                            { value: 'Academic', label: 'Academic',trigger:'ac' },
                            { value: 'sports', label: 'Sports',trigger:'sp'},
                            { value: 'Admin', label: 'Administrative',trigger:'end'},
                            { value: 'Hostel', label: 'Hostel',trigger:'h'},
                            { value: 'Others', label: 'Others',trigger:'end'},
                        ],
                    },
                    {
                        id: 'h',
                        message: 'College provide Hostel facilities for boys and girls separately.Choose hostel types:',
                        trigger: 'ho',
                    },
                    {
                        id: 'ho',
                        options: [
                            { value: 'bh', label: 'Boys Hostel' ,trigger:'bh'},
                            { value: 'gh', label: 'Girls Hostel',trigger:'gh' },
                        ],
                    },
                    {
                        id: 'bh',
                        message: 'Boys hostel is situated inside the campus.',
                        trigger: 'end',
                    },
                    {
                        id: 'gh',
                        message: 'Girls hostel situated outside the campus.',
                        trigger: 'end',
                    },
                    {
                        id: 'ac',
                        message: 'Academic Block is divided into various departments. Choose your department',
                        trigger: 'd',
                    },
                    {
                        id: 'd',
                        options: [
                            { value: 'CSE', label: 'CSE' ,trigger:'csd'},
                            { value: 'ECE', label: 'ECE',trigger:'ecd' },
                            { value: 'EEE', label: 'EEE',trigger:'eed' },
                            { value: 'CV', label: 'CIVIL',trigger:'cvd' },
                            { value: 'MECH', label: 'MECHANICAL',trigger:'md' },
                            { value: 'BME', label: 'BME' ,trigger:'bmd'},
                            { value: 'CHE', label: 'CHEMICAL',trigger:'chd' },
                        ],
                    },
                    {
                        id: 'sp',
                        message: 'Choose Your field',
                        trigger: 'spo',
                    },
                    {
                        id: 'spo',
                        options: [
                            { value: 'Indoor', label: 'Indoor',trigger:'in' },
                            { value: 'Outdoor', label: 'Outdoor',trigger:'out' },
                            { value: 'Gym', label: 'Gym',trigger:'gym' },
                        ],
                    },
                    {
                        id: 'in',
                        message: 'Indoor Sports facilities provided by college are :',
                        trigger: 'ins',
                    },
                    {
                        id: 'ins',
                        options: [
                            { value: 'bc', label: 'Badminton court',trigger:'end' },
                            { value: 'Tt', label: 'Table tennis courrt',trigger:'end' },
                            { value: 'yh', label: 'Yoga Hall',trigger:'end' },
                            { value: 'cc', label: 'Chess and Carrom room',trigger:'end' },
                        ],
                    },
                    {
                        id: 'out',
                        message: 'Oudoor Sports facilities provided by college are :',
                        trigger: 'outs',
                    },
                    {
                        id: 'outs',
                        options: [
                            { value: 'c', label: 'Cricket ground',trigger:'end' },
                            { value: 'bb', label: 'Basket Ball Court',trigger:'end' },
                            { value: 'k', label: 'Kabadi Court',trigger:'end' },
                            { value: 'vb', label: 'Volley Ball Court',trigger:'end' },
                            { value: 'tb', label: 'Throw Ball Court',trigger:'end' },
                        ],
                    },
                    {
                        id: 'gym',
                        message: 'Gym facilities provided by college are :',
                        trigger: 'gys',
                    },
                    {
                        id: 'gys',
                        options: [
                            { value: 'st', label: 'Multi-Gymnasium',trigger:'end' },
                            { value: 'tm', label: 'Tread Mill',trigger:'end' },
                            { value: 'ac', label: 'Aerobic Cycle',trigger:'end' },
                        ],
                    },
                    {
                        id: 'ug',
                        message: 'Branches available for Undergraduate are:',
                        trigger: 'bru',
                    },
                    {
                        id: 'ug',
                        message: 'Branches available for Undergraduate are:',
                        trigger: 'bru',
                    },
                    {
                        id: 'bru',
                        options: [
                            { value: 'CSE', label: 'CSE' ,trigger:'cs'},
                            { value: 'ECE', label: 'ECE',trigger:'ec' },
                            { value: 'EEE', label: 'EEE',trigger:'ee' },
                            { value: 'CV', label: 'CIVIL',trigger:'cv' },
                            { value: 'MECH', label: 'MECHANICAL',trigger:'m' },
                            { value: 'BME', label: 'BME' ,trigger:'bm'},
                            { value: 'CHE', label: 'CHEMICAL',trigger:'ch' },
                        ],
                    },
                    {
                        id: 'cs',
                        message: 'There are total 180 seats available for Computer Science and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'csd',
                        message: 'CSE department is situated at main building towards right.',
                        trigger: 'end',
                    },
                    {
                        id: 'ec',
                        message: 'There are total 120 seats available for Electronics and Communication and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'ecd',
                        message: 'ECE department has its own building.',
                        trigger: 'end',
                    },
                    {
                        id: 'ee',
                        message: 'There are total 60 seats available for EEE and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'eed',
                        message: 'EEE department is situated in main building towards left.',
                        trigger: 'end',
                    },
                    {
                        id: 'ch',
                        message: 'There are total 60 seats available for Chemical Engineering and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'chd',
                        message: 'Chemical department is situated in main building.',
                        trigger: 'end',
                    },
                    {
                        id: 'm',
                        message: 'There are total 60 seats available for Computer Science and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'md',
                        message: 'Mechanical department has its own building.',
                        trigger: 'end',
                    },
                    {
                        id: 'bm',
                        message: 'There are total 30 seats available for Bio Medical and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'bmd',
                        message: 'Bio-medical department is situated in main building.',
                        trigger: 'end',
                    },
                    {
                        id: 'cv',
                        message: 'There are total 60 seats available for Computer Science and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'cvd',
                        message: 'Civil department has its own building.',
                        trigger: 'end',
                    },
                        {
                            id: 'Pg',
                            message: 'Branches available for Postgraduate are:',
                            trigger: 'brp',
                        },
                        {
                            id: 'brp',
                            options: [
                                { value: 'MBA', label: 'MBA' , trigger: 'mba',},
                                { value: 'MCA', label: 'MCA' , trigger: 'mca',},
                                { value: 'Structural Engineering (Civil)', label: 'Structural Engineering (Civil)' , trigger: 'secv',},
                                { value: 'Environment Engineering (Civil)', label: 'Environment Engineering (Civil)', trigger: 'evcv', },
                            ],
                    }, 
                    {
                        id: 'mba',
                        message: 'There are total 60 seats available for MBA and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'mca',
                        message: 'There are total 60 seats available for MCA and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'secv',
                        message: 'There are total 24 seats available for Structural Engineering (Civil) and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                    {
                        id: 'evcv',
                        message: 'There are total 18 seats available for Environment Engineering (Civil) and Fees is about 86000 per year.',
                        trigger: 'end',
                    },
                   

                    {
                        id: 'end',
                        message: 'Thank you',
                    },
                ]}
            />
        );
    }
}

export default SimpleForm;