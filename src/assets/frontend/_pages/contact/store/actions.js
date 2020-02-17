export const actions = {
    updateState : (context, payload) => context.commit('updateState', {
        key : payload.key,
        value : payload.value
    }),

    updateStateObject : (context, payload) => context.commit('updateStateObject', {
        key : payload.key,
        value : payload.value
    })
}
