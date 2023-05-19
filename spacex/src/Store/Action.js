import { getdata } from "../Api"
export const getProductsSuccess=(data)=>({
    type:"GET_PRODUCTS_SUCCCESS",
    payload:data
})
export const get= (type,status,page,Searchdata)=>(dispatch)=>{
    getdata(type,status,page,Searchdata).then((res)=>{
        dispatch(getProductsSuccess(res))})
}