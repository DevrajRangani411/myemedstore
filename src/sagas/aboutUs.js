import {all,takeEvery,put,call} from 'redux-saga/effects';
import * as action from '../constants/actionTypes';
import * as AboutAction from '../actions'; 



function* getApidata()
{
    console.log("getapidata");
    const url=('../assets/Json/Pillers.json');
    const urlc = ('../assets/Json/Customers.json');
    const urlh = ('../assets/Json/Healthcare.json');
    try {
        const response = yield import("../assets/json/Pillers.json");
        const Cust_response = yield import("../assets/Json/Customers.json");
        const Health_response = yield import("../assets/Json/Healthcare.json");
        console.log("cust",Health_response);
        
        console.log("response : ",response.default);
                
                yield put(AboutAction.get_piller_success(response.default));
                yield put(AboutAction.get_customer_success(Cust_response.default));
                yield put(AboutAction.get_healthcare_success(Health_response.default))

        
    } catch (error) {
        console.log("error in funtion ", error);
    }
}

export default function* mysaga(){
    yield takeEvery(action.GET_PILLERS,getApidata);
    yield takeEvery(action.GET_CUSTOMER,getApidata);

}
