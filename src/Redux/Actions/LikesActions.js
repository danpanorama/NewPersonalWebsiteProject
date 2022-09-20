import {PRODUCT_FAIL,SET_PRODUCT_LIST,REQUEST_DATA,AMOUNT,DOWNAMOUNT} from '../constants/LikesConstant'
import {ERROR} from '../constants/loaderConstant.js'


export const listProduct = (data) => async (dispatch)=>{
    try{
        dispatch({type:REQUEST_DATA})
        dispatch({type:SET_PRODUCT_LIST,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const amountset = (data) => async (dispatch)=>{
    try{
        dispatch({type:AMOUNT,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const amountdown = (data) => async (dispatch)=>{
    try{
        dispatch({type:DOWNAMOUNT,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

