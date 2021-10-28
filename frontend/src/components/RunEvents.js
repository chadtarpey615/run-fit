import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeEvent } from "../actions/eventActions"
import Card from "../components/Card"
// import Modal from "react-modal"
import Modal from "../components/Modal"
const RunEvents = ({ event, props }) => {
    const { name, date, distance, _id } = event

    const [modalIsOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()

    const openModal = () => {
        setModalOpen(true)
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: "50vh",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const deleteEvent = (_id) => {
        console.log(_id)
        dispatch(removeEvent(_id))
    }

    return (
        <div >



            <section className="events">
                <Card>
                    <i class="fa fa-5x fa-road" aria-hidden="true"></i>
                    <h1>{name}</h1>
                    <h4>{date}</h4>
                    <h4>{distance}</h4>
                    <button onClick={openModal}>Check out event</button>


                    {/* <div className="modal">
                        <h2> Race: {event.name}</h2>
                        <i class="fa fa-5x fa-road" aria-hidden="true"></i>
                        <button onClick={closeModal}>close</button>
                        <div>I am a modal</div>
                        <form >
                            <div className="modal-btn">
                                <button>I'll be there sign me up</button>
                                <button>Sorry, can't make it</button>

                            </div>

                        </form>
                    </div> */}



                    <button onClick={deleteEvent(_id)}>Remove event</button>
                </Card>
                <Modal
                    show={modalIsOpen}

                    header={name}
                    onCancel={closeModal}
                    content={"place-item-modal-content"}
                    footerClass="place-item-modal-actions"
                    footer={<button onClick={closeModal}>begin</button>}
                >
                </Modal>
            </section>


        </div>
    )
}

export default RunEvents
