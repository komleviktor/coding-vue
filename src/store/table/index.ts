import { Module } from "vuex";
import { RootState } from "../types";
import { TableState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state:TableState = {
    allInformation: [],
}

export const table:Module<TableState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
