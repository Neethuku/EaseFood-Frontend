import axios from "axios"

export const CommonAPI = async(httpRequest,url,reqBody,reqHeader) => {
    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader
    }
    return axios(reqConfig).then((result) => {
        return result
    }).catch((error) => {
        return error
    })
}