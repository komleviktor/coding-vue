import Vue from 'vue';
import Vuex from 'vuex';
import mockData from "./mockData.json";
Vue.use(Vuex);

const CATEGORIES = {
    PRODUCTION: 'Production',
    CONSUMPTION: 'Consumption',
    EXCHANGE: 'Exchange',
    VOLUME: 'Volume',
    PRICE: 'Price',
};

export const store = new Vuex.Store({
    modules: {
        Table: {
            namespaced: true,
            state: {
                allInformation: [],

            },

            getters: {
                getAllInformation: state => state.allInformation,
                getProduction: state => state.allInformation.filter(({ category }) => category === CATEGORIES.PRODUCTION),
                getConsumption: state => state.allInformation.filter(({ category }) => category === CATEGORIES.CONSUMPTION),
                getExchange: state => state.allInformation.filter(({ category }) => category === CATEGORIES.EXCHANGE),
                getVolume: state => state.allInformation.filter(({ category }) => category === CATEGORIES.VOLUME),
                getPrice: state => state.allInformation.filter(({ category }) => category === CATEGORIES.PRICE),
                getOtherCategories: state => state.allInformation.filter(({ category }) => !Object.values(CATEGORIES).includes(category))
            },

            mutations: {
                PARSE_COMMIT_DATA(state, response) {
                    state.allInformation = response;
                },
                COMMIT_UPDATE_DATA(state, { id, dataName, dataValue }) {
                    const index = state.allInformation.findIndex((item) => item.id === id);
                    state.allInformation[index][dataName] = dataValue;
                },
            },

            actions: {
                getMockData() {
                    const response = JSON.parse(JSON.stringify(mockData))
                    store.commit('Table/PARSE_COMMIT_DATA', response);
                },

                setNewData({commit}, { id, dataName, dataValue } ) {
                    //here will be request on Api for updating data, but at now change state
                    store.commit('Table/COMMIT_UPDATE_DATA', { id, dataName, dataValue });                },
            },
        }
    }
});
