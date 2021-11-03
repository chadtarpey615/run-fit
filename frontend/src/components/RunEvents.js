import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeEvent, getAllEvents } from "../actions/eventActions"

import Card from "../components/Card"
// import Modal from "react-modal"
import Modal from "../components/Modal"


const RunEvents = ({ event, props }) => {
    const { name, date, distance, _id } = event
    const [updateForm, setUpdateForm] = useState(null)

    const [modalIsOpen, setModalOpen] = useState(false)
    const eventList = useSelector(state => state.allEvents)
    const { events } = eventList
    const dispatch = useDispatch()

    const openModal = () => {
        setModalOpen(true)

    }

    const openFormModal = () => {
        setUpdateForm(true)
        openModal()
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const deleteEvent = async (id) => {
        dispatch(removeEvent(id))
        dispatch(getAllEvents())
        console.log(id)
    }

    return (
        <div >



            <section className="events">
                <Card>
                    <i className="fa fa-5x fa-road" aria-hidden="true"></i>
                    <h1>{name}</h1>
                    <h4>{date}</h4>
                    <h4>{distance}</h4>
                    <button onClick={openModal}>Check out event</button>
                    <button onClick={() => deleteEvent(_id)}>Remove event</button>
                    <button onClick={openFormModal}>Update Event</button>
                </Card>

                {updateForm ? (
                    <>
                        <Modal
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
                                        <input type="text" placeholder="Add Event Name" />

                                    </div>
                                    <div >
                                        <label htmlFor="date" > </label>
                                        <input type="text" placeholder={`Event Date`} />

                                    </div>
                                    <div >
                                        <label htmlFor="distance" > </label>
                                        <input type="text" placeholder="Add Event Total Distance" />

                                    </div>
                                    <div >
                                        <button>Update Event</button>

                                    </div>
                                </form>
                            }
                        >

                        </Modal>
                    </>
                ) : (
                        <Modal
                            show={modalIsOpen}

                            header={name}
                            onCancel={closeModal}
                            content={"place-item-modal-content"}
                            footerClass="place-item-modal-actions"
                            footer={
                                <div>
                                    <i class="fa fa-5x fa-road" aria-hidden="true"></i>

                                    <h1>{name}</h1>
                                    <h2>{date}</h2>
                                    <h4>{distance} miles</h4>
                                </div>}
                        >
                        </Modal>
                    )}
            </section>


        </div >
    )
}

export default RunEvents
