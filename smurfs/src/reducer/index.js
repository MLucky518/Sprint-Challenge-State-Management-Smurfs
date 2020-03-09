import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS,ADD_SMURF } from "../actions/index";

const initialState = {
  isFetching: false,
  error: "",
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      console.log("reducer starting");
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [...state.smurfs, action.payload]
      };

      case ADD_SMURF:
          return{
              ...state,
              isFetching:false,
              error:"",
              smurfs:[...state.smurfs,action.payload]
          };

    default:
      console.log("nothing");
      return state;
  }
};
