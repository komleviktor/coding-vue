import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from "./types";
import { table } from "./table";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        table,
    },
}

export default new Vuex.Store<RootState>(store);
