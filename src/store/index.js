import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorits: [],
        test_info: "TESTINFO",
    },
    getters: {
        Favorits: (state) => (page = 1, page_count = 8) => {
            const _first = (page - 1) * page_count
            const _last = _first + page_count
            return state.favorits.slice(_first, _last)
        }
    },
    mutations: {
        // click on image like
        likeImage(state, new_favorit) {
            if (state.favorits.includes(new_favorit)) {
                const _ind = state.favorits.findIndex(favorit => favorit == new_favorit)
                state.favorits.splice(_ind, 1)
            } else {
                state.favorits.push(new_favorit);
            }
            localStorage.setItem("favorits", JSON.stringify(state.favorits))
        },

        // set all favorits to favorite variable
        getFavoritsFromLocal(state) {
            state.favorits = localStorage.getItem('favorits') ? JSON.parse(localStorage.getItem('favorits')) : [];
        },
    },
    actions: {
        // get all favorits on start
        getOldFavorits(context) {
            context.commit("getFavoritsFromLocal")
        }
    },

    modules: {}
})