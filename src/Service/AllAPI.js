import { commonAPI } from "./CommonAPI"
import { SERVER_URL } from "./ServerUrl"

export const verifyPinAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/table/`,"","") 
}

export const getTableDataAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/table/`,"","")
}

export const getAllCategoriesAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/category/`,"","")
}

export const getAllMenuAPI = async(pin)=>{
    return await commonAPI("GET", `${SERVER_URL}/api/menu/${pin}/food`,"","")
}

export const addToCartAPI = async(reqBody,reqHeader) => {  
    return await commonAPI("POST",`${SERVER_URL}/api/cart/`,reqBody,reqHeader)
}

export const getCartAPI = async(tableID) => {
    return await commonAPI("GET",`${SERVER_URL}/api/cart/${tableID}/`,"","")  
}

export const incrementCartItemAPI = async(id,action) => {
    return await commonAPI("POST",`${SERVER_URL}/api/cart/update-quantity/`,id,action,"") 
}