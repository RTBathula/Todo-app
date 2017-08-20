import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
//import expect from 'expect';

import { Provider } from 'react-redux'
import store from '../store/store'
import Search from '../containers/search';

describe('Assure search components', () => {

	let container;

	beforeEach(() => {
		container = mount(<Provider store={store}>
			<Search />		
		</Provider>);
	});

    it('General search input gene symbol', () => {  
		const inputgeneSymbol  = container.find('.inputgeneSymbol').first();		
		expect(inputgeneSymbol).toBeDefined();    	
    });


    it('General search input sequence position', () => {  		
		const inputseqPosition = container.find('.inputseqPosition').first();	
		expect(inputseqPosition).toBeDefined();    	
    });


    it('General search input amino Acid Letter', () => {  		
		const aminoAcidLetter  = container.find('.aminoAcidLetter').first();		
		expect(aminoAcidLetter).toBeDefined();    	
    });

    it('General search btn make search', () => {  		
		const btnmakesearch    = container.find('.btnmakesearch').first();
		expect(btnmakesearch).toBeDefined();    	
    });

    it('HGVS search input', () => {  		
		const inputHGVS    = container.find('.inputHGVS').first();
		expect(inputHGVS).toBeDefined();    	
    });

    it('HGVS search btn make search', () => {  		
		const btnmakeHGVSsearch    = container.find('.btnmakeHGVSsearch').first();
		expect(btnmakeHGVSsearch).toBeDefined();    	
    });
});