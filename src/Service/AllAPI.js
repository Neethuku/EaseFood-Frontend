import { CommonAPI } from "./CommonAPI"
import { SERVER_URL } from "./ServerUrl"

export const verifyPinAPI = async(pin) => {
    return await CommonAPI("GET",`${SERVER_URL}/api/menu/${pin}`,null,{})
}

// export const getAllFoodAPI = async() => {
//     return await CommonAPI("GET",`${SERVER_URL}/api/food`,"","")
// }