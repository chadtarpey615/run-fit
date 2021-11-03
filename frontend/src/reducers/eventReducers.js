import { EVENT_CREATE_REQUEST, EVENT_CREATE_SUCCESS, EVENT_CREATE_FAIL, EVENT_GET_REQUEST, EVENT_GET_FAIL, EVENT_GET_SUCCESS, EVENT_DELETE_SUCCESS, EVENT_DELETE_REQUEST, EVENT_UPDATE_REQUEST, EVENT_UPDATE_SUCCESS, EVENT_UPDATE_FAIL } from "../constants/eventConstants.js"

export const eventCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_CREATE_REQUEST:
            return {
                loading: true
            }

        case EVENT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                event: action.payload
            }

        case EVENT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const getEventsReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case EVENT_GET_REQUEST:
            return {
                loading: true,
                events: []
            }

        case EVENT_GET_SUCCESS:
            return {
                loading: false,
                // success: true,
                events: action.payload
            }
        case EVENT_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const updateEventReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case EVENT_UPDATE_REQUEST:
            return { loading: true }

        case EVENT_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                eventInfo: action.payload
            }
        case EVENT_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const removeEventReducer = (state = { events: [] }, action) => {
    switch (action.type) {

        case EVENT_DELETE_REQUEST:
            return {
                loading: true,
                events: []
            }

        case EVENT_DELETE_SUCCESS:
            return {
                ...state,
                events: state.events.filter(x => x.events !== action.payload)


            }
        default:
            return state
    }

}