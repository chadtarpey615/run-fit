import React, { useState } from 'react'
import Modal from "react-modal"
const RunEvents = ({ event }) => {
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
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div >



            <section className="events">
                <i class="fa fa-5x fa-road" aria-hidden="true"></i>
                <h1>{event.name}</h1>
                <h4>{event.date}</h4>
                <h4>{event.distance}</h4>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2> {event.name}</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>

                <button>Remove event</button>
            </section>


        </div>
    )
}

export default RunEvents
