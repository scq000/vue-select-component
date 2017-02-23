import Vue from 'vue';
import {createTest, createVue, destroyVM } from '../utils';

import Select from 'src/components/Select';

describe('Select Component', () => {

	let vm;
	
	it('create', () => {
		vm = createTest(Select, true);

		expect(vm.$el.textContent).to.equal('hello');
		
	});
	
	afterEach(() => {
		destroyVM(vm);
	});


});
