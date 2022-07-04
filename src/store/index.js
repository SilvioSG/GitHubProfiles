import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        requestError: false,
        username: '',
        userInfo: [],
        userRepos: [],
        userStarred: [],
        filterText: '',
        reposCont: 0,
        starredCont: 0,
    },
    mutations: {
        mutateRequestError(state, payload) {
            state.requestError = payload
        },
        mutateUserInfo(state, payload) {
            state.userInfo = payload
        },
        mutateUserRepos(state, payload) {
            state.userRepos = payload
        },
        mutateUserStarred(state, payload) {
            state.userStarred = payload
        },
        mutateUsername(state, payload) {
            state.username = payload
        },
        mutateFilterText(state, payload) {
            state.filterText = payload
        },
        mutateReposCont(state, payload) {
            state.reposCont = payload
        },
        mutateStarredCont(state, payload) {
            state.starredCont = payload
        },
    },
    actions: {}
})

export default store