import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeEvent, getAllEvents, updateEvent } from "../actions/eventActions"

import Card from "../components/Card"
// import Modal from "react-modal"
import Modal from "../components/Modal"


const RunEvents = ({ event, deleteEvent }) => {
    const { name, date, distance, _id, creator } = event
    const [updateForm, setUpdateForm] = useState(false)
    const [addComment, setAddComment] = useState(false)
    const [modalIsOpen, setModalOpen] = useState(false)
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDistance, setEventDistance] = useState("")

    const dispatch = useDispatch()
    const eventList = useSelector(state => state.allEvents)



    useEffect(() => {
        console.log(creator)
    })

    const openModal = () => { setModalOpen(true) }

    const openFormModal = () => {
        setUpdateForm(true)
        openModal()
        console.log(eventList)
    }

    const openCommentModal = () => {
        setAddComment(true)
        openModal()
    }

    const closeModal = () => {
        setModalOpen(false)
        setUpdateForm(false)
        setAddComment(false)

    }

    // const deleteEvent = async (id) => {
    //     dispatch(removeEvent(id))
    //     dispatch(getAllEvents())
    //     console.log(id)
    // }

    const updateSubmitHandler = async (e, id) => {

        e.preventDefault()
        await dispatch(updateEvent({
            _id: id,
            name: eventName,
            date: eventDate,
            distance: eventDistance
        }))

        await dispatch(getAllEvents())



    }

    return (
        <>
            <Card>

                <i className="fa fa-5x fa-road" aria-hidden="true"></i>
                <h1>Event Title: <span>{name}</span></h1>
                <h4>Date: <span>{date}</span></h4>
                <h4>Distance: <span>{distance}</span></h4>
                <h4>Created by: <span>{creator}</span></h4>
                <span className="horizontal-line"></span>
                <div className="comments">
                    {/* <input type="text" /> */}
                </div>
                <div className="card-btn">
                    <button onClick={openModal}>Check out event</button>
                    <button onClick={(e) => deleteEvent(e, _id)}>Remove event</button>
                    <button onClick={openFormModal}>Update Event</button>
                </div>



            </Card>

            {
                updateForm ? (

                    <Modal
                        id={_id}
                        show={modalIsOpen}
                        header={name}
                        onCancel={closeModal}
                        content={"place-item-modal-content"}
                        footerClass="place-item-modal-actions"
                        footer={
                            <form className="run-form">
                                <h1>Add run event form </h1>

                                <div >
                                    <label htmlFor="name" > </label>
                                    <input type="text" placeholder="Add Event Name" onChange={(e) => setEventName(e.target.value)} />

                                </div>
                                <div >
                                    <label htmlFor="date" > </label>
                                    <input type="text" placeholder={`Event Date`} onChange={(e) => setEventDate(e.target.value)} />

                                </div>
                                <div >
                                    <label htmlFor="distance" > </label>
                                    <input type="text" placeholder="Add Event Total Distance" onChange={(e) => setEventDistance(e.target.value)} />

                                </div>
                                <div >
                                    <button onClick={(e) => updateSubmitHandler(e, _id)}>Update Event</button>

                                </div>
                            </form>
                        }
                    >
                    </Modal>



                ) : (
                        <Modal
                            show={modalIsOpen}

                            header={name}
                            onCancel={closeModal}
                            content={"place-item-modal-content"}
                            footerClass="place-item-modal-actions"
                            footer={
                                <div>
                                    <i className="fa fa-5x fa-road" aria-hidden="true"></i>

                                    <h1>{name}</h1>
                                    <h2>Created by: {creator}</h2>
                                    <h2>{date}</h2>
                                    <h4>{distance} miles</h4>
                                    <button><i className="fa fa-2x   fa-thumbs-up"></i></button>
                                    <button><i className="fa fa-2x  fa-thumbs-down"></i></button>
                                    <div className="comments">
                                        <label htmlFor="Add Comment">Add Commnet</label>
                                        <input type="text" />
                                    </div>
                                </div>}

                        >
                        </Modal>
                    )

            }


        </>





    )




}

export default RunEvents
