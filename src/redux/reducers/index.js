import { combineReducers } from "@reduxjs/toolkit";

import surveyData from './survey'


//import storage from 'redux-oersist/lic/storage"
/* config key unutk local storage
const persistData = {
key: 'data',
storage:  
}
*/

const reducer = combineReducers({
  surveyData /*: persistREducer(persistData, surveyData*/

})


export default reducer