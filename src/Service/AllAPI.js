import { commonAPI } from "./CommonAPI"
import { SERVER_URL } from "./ServerUrl"

export const verifyPinAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/table/`)
}

export const getTableDataAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/table/`)
}

export const getAllCategoriesAPI = async(pin) => {
    return await commonAPI("GET",`${SERVER_URL}/api/menu/${pin}/category/`)
}

export const getAllMenuAPI = async(pin)=>{
    return await commonAPI("GET", `${SERVER_URL}/api/menu/${pin}/food`)
}