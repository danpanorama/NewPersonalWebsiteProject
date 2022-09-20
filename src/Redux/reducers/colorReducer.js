import * as actionTypes from "../constants/LikesConstant";

const initialState = {
  color: "royalblue",
 

};

const worders = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.ADD_LIKE:
      const add = {
        ...state,
      };
     

      return add;

    case actionTypes.DEL_LIKE:
      const del = {
        ...state,
      };


    

      return del;









    default:
      return state

  }
}

export default worders