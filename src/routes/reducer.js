import { combineReducers } from 'redux';

// To be replaced by imports from nested routes
const objectList = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const reducer = combineReducers({
  objectList
});

export default reducer;