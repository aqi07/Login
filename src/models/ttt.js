export default {
    namespace: 'ttt',
    state: {
      exist:"unknown"

},
    reducers: {
      'check'(state, { payload: profile }) {
        return state.filter(item => item.id !== id);
      },
    },
  };