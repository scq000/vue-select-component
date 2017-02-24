import MySelect from 'src/components/MySelect';

import Vue from 'vue';
import {
    createTest,
    createVue,
    destroyVM,
} from '../utils';

Vue.component('my-select', MySelect);

describe('MySelect Component', () => {
    let vm;
    let input;
    let dropdown;
    let inputbox;

    describe('#Base', () => {
        beforeEach(() => {
            vm = createTest(MySelect, {
                options: [{
                    text: 'test1',
                    value: 'test1',
                }, {
                    text: 'test2',
                    value: 'test2',
                }],
            }, true);
            input = vm.$el.querySelector('.select-input');
            dropdown = vm.$el.querySelector('.select-content');
            inputbox = vm.$el.querySelector('.select-input__box');
        });

        it('should render correctly', () => {
            expect(input).not.be.null;
            expect(vm.$el.querySelectorAll('.select-content__item').length).to.equal(2);
            expect(vm.$el.querySelector('.select-content__item:nth-child(2) > span').textContent).to.equal('test2');
        });

        it('should show dropdown when click the select inputbox', () => {
            expect(dropdown.style.display).to.equal('none');
            input.click();

            Vue.nextTick(() => {
                expect(dropdown.style.display).to.equal('');
            });
        });

        it('should render the selected value to inputbox when click the option item', () => {
            const testOption1 = vm.$el.querySelector('.select-content__item:nth-child(1)');
            const testOption2 = vm.$el.querySelector('.select-content__item:nth-child(2)');

            testOption1.click();
            Vue.nextTick(() => {
                expect(inputbox.value).to.equal('test1');
            });

            testOption2.click();
            Vue.nextTick(() => {
                expect(inputbox.value).to.equal('test2');
            });
        });

        it('should hide when click outside of the select dropdown content', () => {
            input.click();
            document.body.click();

            Vue.nextTick(() => {
                expect(dropdown.style.display).to.equal('none');
            });
        });
    });

    describe('#Editable Select', () => {
        it('can change the value by user input', () => {
            vm = createVue({
                template: `
                    <my-select :options="options" editable></my-select>
                `,
                data() {
                    return {
                        options: [{ text: 'test1', value: 'test1' }, { text: 'test2', value: 'test2' }],
                    };
                },
            }, true);

            expect(vm.$el.querySelector('.select-input__box').readOnly).to.false;
        });
    });

    describe('#Disabled Select', () => {
        it('can disable the select', (done) => {
            vm = createVue({
                template: `
                    <my-select :options="options"></my-select>
                `,
                data() {
                    return {
                        options: [{ text: 'test1', value: 'test1' }, { text: 'test2', value: 'test2' }],
                    };
                },
            }, true);

            inputbox.click();

            setTimeout(() => {
                expect(dropdown.style.display).to.equal('none');
                done();
            }, 500);
        });
    });

    afterEach(() => {
        destroyVM(vm);
    });
});
