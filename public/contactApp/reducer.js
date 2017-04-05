export default function contactReducer(state=[],action){
  switch(action.type){
    case "ADD_CONTACT":
      return [...state,action.payload];
      break;

    default :
      return state;
      break;
  }
}
