import { EVENT_CREATE_FAIL, EVENT_CREATE_REQUEST, EVENT_CREATE_SUCCESS } from "../constants/eventConstants"
import axios from "axios"

export const createEvent = (event) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENT_CREATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/events`, event, config)

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
