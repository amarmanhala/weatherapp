export const state = () => ({
    latitude: 0
  })

  export const mutations = {
      update(state, { payload } ) {
        state.latitude = payload;
      }
  }