import { mount } from '@vue/test-utils'
import table from '../../../src/blocks/Tables.vue'
import TableHeadRow from "../../../src/components/TableHeadRow.vue";


describe('TableHeadRow', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(table,{
            propsData: {
                id: 13,
                name: '111975',
                alias: '9.Generated Energy Gas (MW)',
                sourceSystem: 'Point Connect',
                category: 'Production',
                updatedBy: 'Bob'
            }
        })
    })

    test('is an instance of Vue', () => {
        expect(wrapper.vm).toBeTruthy();
    })
})
