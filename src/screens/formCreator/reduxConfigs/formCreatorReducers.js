import {UPDATE_ENTRIES, REMOVE_ENTRY} from './formCreatorTypes';

const formCreatorState = {
  formEntries: [],
};

const formCreatorReducer = (state = formCreatorState, action) => {
  switch (action.type) {
    case UPDATE_ENTRIES:
      return {...state, formEntries: [...state.formEntries, action.value]};
    case REMOVE_ENTRY:
      return {
        ...state,
        formEntries: state.formEntries.filter(
          (entry) => entry.id !== action.value,
        ),
      };
    default:
      return state;
  }
};

export default formCreatorReducer;
