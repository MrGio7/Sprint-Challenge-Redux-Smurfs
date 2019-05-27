import { 
  FETCH_DATA_SUCCESS,
  ADD_SMURF_SUCCESS,
  DELETE_ITEM_SUCCESS
 } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      }
    case ADD_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
      }

      case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
  
  default:
    return state;
  }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
