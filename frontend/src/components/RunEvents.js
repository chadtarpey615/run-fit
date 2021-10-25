import React, { useState } from 'react'
import Modal from "react-modal"
const RunEvents = ({ event }) => {
    const { name, date, distance } = event
    console.log(date)
    const [modalIsOpen, setModalOpen] = useState(false)

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

    return (
        <div >



            <section className="events">
                <i class="fa fa-5x fa-road" aria-hidden="true"></i>
                <h1>{name}</h1>
                <h4>{date}</h4>
                <h4>{distance}</h4>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="modal">
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
                    </div>

                </Modal>

                <button>Remove event</button>
            </section>


        </div>
    )
}

export default RunEvents
