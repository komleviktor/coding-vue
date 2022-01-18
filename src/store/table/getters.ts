import { GetterTree } from "vuex";
import { TableState } from "./types";
import { RootState } from "../types";

const enum CATEGORIES {
    PRODUCTION = 'Production',
    CONSUMPTION = 'Consumption',
    EXCHANGE = 'Exchange',
    VOLUME = 'Volume',
    PRICE = 'Price',
}

export enum TABLE_GETTERS {
    GET_ALL = 'getAllInformation',
    GET_PRODUCTION = 'getProduction',
    GET_CONSUMPTION = 'getConsumption',
    GET_EXCHANGE = 'getExchange',
    GET_VOLUME = 'getVolume',
    GET_PRICE = 'getPrice',
    GET_OTHER_CATEGORIES = 'getOtherCategories',


}

export const getters:GetterTree<TableState, RootState> = {
    [TABLE_GETTERS.GET_ALL] (state):Array<object> {
        return state.allInformation;
    },

    [TABLE_GETTERS.GET_PRODUCTION] (state):Array<object>  {
        return state.allInformation.filter(item => item?.category === CATEGORIES.PRODUCTION);
    },

    [TABLE_GETTERS.GET_CONSUMPTION] (state):Array<object>  {
        return state.allInformation.filter(item => item?.category === CATEGORIES.CONSUMPTION);
    },

    [TABLE_GETTERS.GET_EXCHANGE] (state):Array<object>  {
        return state.allInformation.filter(item => item?.category === CATEGORIES.EXCHANGE);
    },

    [TABLE_GETTERS.GET_VOLUME] (state):Array<object>  {
        return state.allInformation.filter(item => item?.category === CATEGORIES.VOLUME);
    },

    [TABLE_GETTERS.GET_PRICE] (state):Array<object>  {
        return state.allInformation.filter(item => item?.category === CATEGORIES.PRICE);
    },

    [TABLE_GETTERS.GET_OTHER_CATEGORIES] (state):Array<object>  {
        return state.allInformation.filter(item => !Object.values([
            CATEGORIES.PRODUCTION,
            CATEGORIES.CONSUMPTION,
            CATEGORIES.EXCHANGE,
            CATEGORIES.VOLUME,
            CATEGORIES.PRICE,
        ]).includes(item?.category));
    }
}
