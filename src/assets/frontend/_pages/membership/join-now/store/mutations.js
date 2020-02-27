export const mutations = {
    updateState : (state, payload) => state[payload.key] = payload.value,
    updateStateObject : (state, payload) => state[payload.key] = Object.assign({}, payload.value)
}
