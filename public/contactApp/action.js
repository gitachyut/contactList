import uuidV4 from 'uuid/v4';
export function addContact(userObj){
  userObj = {...userObj,id:uuidV4()}
  return {
    type : "ADD_CONTACT",
    payload : userObj
  }
}

export function fliterContact(arr){
  return {
    type : "FILTER_CONTACT",
    payload : arr
  }
}
export function fliterEmpty(){
  return {
    type : "FILTER_EMPTY",
    payload : null
  }
}
