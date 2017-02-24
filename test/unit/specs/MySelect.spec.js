import MySelect from 'src/components/MySelect';

import Vue from 'vue';
import {
    createTest,
    destroyVM,
} from '../utils';


describe('MySelect Component', () => {
    let vm;
    let input;
    let dropdown;

    describe('#Base', () => {
        beforeEach(() => {
            vm = createTest(MySelect, {
                options: [{
                    text: 'test',
                    value: 'test',
                }, {
                    text: 'test2',
                    value: 'test2',
                }],
            }, true);
        });

        it('should render correctly', () => {
            expect(vm.$el.querySelector('.select-input')).not.be.null;
            expect(vm.$el.querySelectorAll('.select-content__item').length).to.equal(2);
            expect(vm.$el.querySelector('.select-content__item:nth-child(2) > span').textContent).to.equal('test2');
        });

        it('should show dropdown when click the select inputbox', () => {
            input = vm.$el.querySelector('.select-input');
            dropdown = vm.$el.querySelector('.select-content');

            expect(dropdown.style.display).to.equal('none');
            input.click();

            Vue.nextTick(() => {
                expect(dropdown.style.display).to.equal('');
            });
        });

        it('should render the selected value to inputbox when click the option item', () => {
            const inputbox = vm.$el.querySelector('.select-input__box');
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
            input = vm.$el.querySelector('.select-input');
            dropdown = vm.$el.querySelector('.select-content');

            input.click();
            document.body.click();

            Vue.nextTick(() => {
                expect(dropdown.style.display).to.equal('none');
            });
        });
    });

    afterEach(() => {
        destroyVM(vm);
    });
});
