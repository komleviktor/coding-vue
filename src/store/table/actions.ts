import {ActionTree} from "vuex";
import { TableState } from "./types";
import { RootState } from "../types";
import mockData from "../mockData.json";

export const actions:ActionTree<TableState, RootState> = {
    loadMockDataToLocalStorage():void {
        const isLocalStorageDataExist = localStorage.getItem('response');
        if (!isLocalStorageDataExist) {
            localStorage.setItem('response',  JSON.stringify(mockData));

        }
    },

    getMockData({ commit }):void {
        const response = JSON.parse(localStorage.getItem('response'));
        commit('PARSE_COMMIT_DATA', response);
    },

    setNewData({ commit, getters }, { id, dataName, dataValue }):void {
        //here will be request on Api for updating data, but at now change state
        commit('COMMIT_UPDATE_DATA', { id, dataName, dataValue });
        localStorage.setItem('response',  JSON.stringify(getters["getAllInformation"]));
    },
}
