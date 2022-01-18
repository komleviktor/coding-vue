import { store } from '../../store';

describe('actions', () => {
    test('getters getExchange will be contains some data', () => {
        store.dispatch("Table/getMockData")
        expect.anything(store.getters["Table/getExchange"])
    })
})
