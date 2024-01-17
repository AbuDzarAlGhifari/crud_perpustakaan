import React from 'react';

const ModalForm = ({ formik, modal }) => {
  return (
    <form className={`${formik.values.formType === 'delete' || modal.type ? 'hidden' : ''}`}>
      <div className="mb-3">
        <label className="block text-sm font-bold text-gray-700">Nama</label>
        <input
          className={`form-input ${formik.errors.nama ? 'border-sky-700' : ''} bg-gray-200 px-1 rounded-md`}
          onChange={formik.handleChange}
          name="nama"
          value={formik.values.nama}
          type="text"
          placeholder="Enter Anggota name..."
        />
        <p className="text-sm text-sky-700">{formik.errors.nama}</p>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold text-gray-700">Email</label>
        <input
          className={`form-input ${formik.errors.email ? 'border-sky-700' : ''} bg-gray-200 px-1 rounded-md`}
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          type="text"
          placeholder="Enter email..."
        />
        <p className="text-sm text-sky-700">{formik.errors.email}</p>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold text-gray-700">No Hp</label>
        <input
          className={`form-input ${formik.errors.no_hp ? 'border-sky-700' : ''} bg-gray-200 px-1 rounded-md`}
          onChange={formik.handleChange}
          name="no_hp"
          value={formik.values.no_hp}
          type="text"
          placeholder="Enter no_hp..."
        />
        <p className="text-sm text-sky-700">{formik.errors.no_hp}</p>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-bold text-gray-700">Alamat</label>
        <input
          className={`form-input ${formik.errors.alamat ? 'border-sky-700' : ''}bg-gray-200 px-1 rounded-md`}
          onChange={formik.handleChange}
          name="alamat"
          value={formik.values.alamat}
          type="alamat"
          placeholder="Enter alamat..."
        />
        <p className="text-sm text-sky-700">{formik.errors.alamat}</p>
      </div>
    </form>
  );
};

export default ModalForm; 
