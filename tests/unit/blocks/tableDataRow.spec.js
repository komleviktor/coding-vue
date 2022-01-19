import { mount } from '@vue/test-utils'
import table from '../../../src/blocks/Tables.vue'
import TableDataRow from "../../../src/components/TableDataRow.vue";


describe('TableDataRow', () => {
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
