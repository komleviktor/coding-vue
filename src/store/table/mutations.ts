import { MutationTree } from "vuex";
import { TableState } from "./types";

export enum TABLE_MUTATIONS {
    PARSE_COMMIT_DATA = 'PARSE_COMMIT_DATA',
    COMMIT_UPDATE_DATA = 'COMMIT_UPDATE_DATA'
}

export const mutations:MutationTree<TableState> = {
    [TABLE_MUTATIONS.PARSE_COMMIT_DATA](state, response:Array<object>) {
        state.allInformation = response;
    },

    [TABLE_MUTATIONS.COMMIT_UPDATE_DATA](state, { id, dataName, dataValue }) {
        const index = state.allInformation.findIndex((item) => item.id === id);
        state.allInformation[index][dataName] = dataValue;
    },
}




