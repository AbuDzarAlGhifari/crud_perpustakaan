import React from 'react';
import Modal from 'react-modal';
import ModalForm from './ModalForm';
import { AiFillWarning, AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';

Modal.setAppElement('#root');

const ModalView = ({ formik, modal, setModal }) => {
  return (
    <Modal
      isOpen={modal.visibility}
      onRequestClose={() => {
        setModal(prev => ({ ...prev, visibility: false }));
      }}
      contentLabel="Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header flex justify-between items-center p-4 bg-sky-950 text-white">
        <h2>{modal.title}</h2>
        <button
          className="close-button"
          onClick={() => {
            setModal(prev => ({ ...prev, visibility: false }));
          }}
        >
          &times;
        </button>
      </div>
      <div className="modal-body p-4">
        <ModalForm formik={formik} modal={modal} />
        <div
          className={`${
            formik.values.formType === 'delete' || modal.type
              ? 'flex flex-col gap-2 w-full items-center'
              : 'hidden'
          }`}
        >
          {modal.type === 'success' ? (
            <AiFillCheckCircle className="text-sky-700" size={100} />
          ) : modal.type === 'error' ? (
            <FaTimesCircle className="text-sky-700" size={100} />
          ) : (
            <AiFillWarning className="text-sky-700" size={100} />
          )}
          <div className="mb-2 text-lg text-center">
            {modal.message || 'Are you sure you want to delete this data?'}
          </div>
        </div>
      </div>
      <div className="modal-footer p-4 flex justify-end">
        <button
          className="bg-sky-900 rounded-md text-white font-bold px-1 mr-2"
          onClick={() => {
            setModal(prev => ({ ...prev, visibility: false }));
          }}
        >
          Close
        </button>
        <button
          className={`bg-sky-900 rounded-md px-1 text-white font-semibold ${modal.type ? 'hidden' : ''}`}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          {modal.button}
        </button>
      </div>
    </Modal>
  );
};

export default ModalView;
