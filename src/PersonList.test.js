import React from 'react';
import { shallow } from 'enzyme'
import PersonList from './PersonList'

describe('PersonList', () => {
    it('renders a ul element', () => {
        const personListWrapper = shallow(<PersonList/>);
        const peopleListUls = personListWrapper.find('ul')
        expect(peopleListUls).toHaveLength(1);
    });

    it('renders no li elements when no people exists', () => {
        const personListWrapper = shallow(<PersonList people={[]}/>);
        const peopleListItems = personListWrapper.find('li');
        expect(peopleListItems).toHaveLength(0);
    });

    it('renders one li element for each person that exists', ()=>{
        const people = [{firstName: 'Jack', lastName: 'Turing'}, {firstName: 'Jack', lastName: 'Sparrow'}];
        const personListWrapper = shallow(<PersonList people={people}/>);
        const peopleListItems = personListWrapper.find('li');
        expect(peopleListItems).toHaveLength(2);
    });
});