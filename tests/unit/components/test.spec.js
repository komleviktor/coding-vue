import { mount } from '@vue/test-utils'
import table from '../../../src/blocks/Tables.vue'

describe('Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(table,{
            propsData: {
                items: [],
                categoryName: 'Category'
            }
        })
    })

    test('is an instance of Vue', () => {
        expect(wrapper.vm).toBeTruthy();

    })

    test('set correct category name', () => {
        expect(wrapper.vm.categoryName).toEqual('Category');

    })

    test('should not show component with empty data ', () => {
        expect(wrapper.vm.isListExist()).toBeFalsy()
    })
})
