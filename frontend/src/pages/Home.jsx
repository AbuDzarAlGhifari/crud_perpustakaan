import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
import ModalView from "../components/ModalView";
import TableView from "../components/TableView";

const Home = () => {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState({
    visibility: false, title: 'Add anggota', button: '', type: '', message: ''
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + '/anggota')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: '', nama: '', email: '', no_hp: '', alamat: '', formType: ''
    },
    onSubmit: async (values) => {
      const failedResponse = (error) => {
        if (error.response.data) {
          formik.setErrors(error.response.data.errors);
        } else {
          setModal({ visibility: true, type: 'error', message: "Can't connect to the server" });
        }
      };

      const successResponse = (message) => {
        setRefresh(!refresh);
        setModal({ visibility: true, type: 'success', message: message });
      };

      if (values.formType === 'delete') {
        axios.delete(baseUrl + '/anggota/' + values.id)
          .then(() => {
            successResponse('Data deleted successfully');
          })
          .catch((error) => {
            failedResponse(error);
          });
      } else if (values.formType === 'edit') {
        axios.put(baseUrl + '/anggota/' + values.id, values)
          .then(() => {
            successResponse('Data edited successfully');
          })
          .catch((error) => {
            failedResponse(error);
          });
      } else {
        axios.post(baseUrl + '/anggota', values)
          .then(() => {
            successResponse('Data added successfully');
          })
          .catch((error) => {
            failedResponse(error);
          });
      }
    },
  });

  return (
    <div className="bg-slate-300">
      <ModalView formik={formik} modal={modal} setModal={setModal} />
      <div className="p-2">
        <div className="flex justify-start mb-3">
          <button 
            className="bg-sky-950 rounded-md text-white p-1 text-xs sm:text-sm lg:text-lg"
            onClick={() => {
            formik.resetForm();
            setModal({ visibility: true, title: 'Add anggota Form', button: 'Add' });
          }}>Tambah Anggota</button>
        </div>
        <TableView 
        formik={formik} setModal={setModal} data={data} />
      </div>
    </div>
  );
};

export default Home;
