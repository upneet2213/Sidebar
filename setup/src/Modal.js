import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {AppContext,useGlobalContext} from './context.js'
const Modal = () => {
  const data=useGlobalContext()
  const {isModalOpen,isSidebarOpen,closeModal}=data
  return <div className={`modal-overlay ${isModalOpen?"show-modal":null}`}>
    <div className="modal-container">
      <h3>Modal Content</h3>
      <button className="close-modal-btn" onClick={closeModal}><FaTimes/></button>
    </div>
  </div>
}

export default Modal
