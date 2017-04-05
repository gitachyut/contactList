export default function searchReducer(state=[],action){
  switch(action.type){
    case "FILTER_CONTACT":
      return [...action.payload];
      break;

    case "FILTER_EMPTY":
      return null;
      break;

    default :
      return null;
      break;
  }
}
