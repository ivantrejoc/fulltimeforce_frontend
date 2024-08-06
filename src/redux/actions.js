import {
    GET_API_TOKEN
} from "./action-types";

export const getApiToken = (token) => {   
    return {
        type: GET_API_TOKEN,
        payload: token
    }
}