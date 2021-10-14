import { EVENT_CREATE_FAIL, EVENT_CREATE_REQUEST, EVENT_CREATE_SUCCESS } from "../constants/eventConstants"
import axios from "axios"

export const createEvent = (event) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_CREATE_REQUEST
        })

        const { data } = await axios.post(`/api/events`, event)

        dispatch({
            type: EVENT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EVENT_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}
