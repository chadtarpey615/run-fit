import { EVENT_CREATE_FAIL, EVENT_CREATE_REQUEST, EVENT_CREATE_SUCCESS, EVENT_GET_REQUEST, EVENT_GET_FAIL, EVENT_GET_SUCCESS, EVENT_DELETE_SUCCESS, EVENT_DELETE_REQUEST, EVENT_UPDATE_REQUEST, EVENT_UPDATE_FAIL, EVENT_UPDATE_SUCCESS } from "../constants/eventConstants"
import axios from "axios"

export const createEvent = (event) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENT_CREATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        // const {userInfo.token}
        console.log(userInfo.data.token)
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.data.token}`
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


export const getAllEvents = (events) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_GET_REQUEST
        })


        const { data } = await axios.get("/api/events/all-events")
        // console.log(data)

        dispatch({
            type: EVENT_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EVENT_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const updateEvent = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENT_UPDATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.data.token}`

            }
        }

        const { data } = await axios.put(`/api/events/${id}`,
            config
        )


        dispatch({
            type: EVENT_UPDATE_SUCCESS,
            payload: data
        })




    } catch (error) {
        dispatch({
            type: EVENT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const removeEvent = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENT_DELETE_REQUEST
        })

        const response = await axios.get(`http://localhost:3001/api/events/${id}`)
        console.log(response)

        dispatch({
            type: EVENT_DELETE_SUCCESS,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }

}