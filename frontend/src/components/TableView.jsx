import React from "react";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

const TableView = ({ data, setModal, formik }) => {
  return (
    <table className="table-auto w-full border border-sky-950">
      <thead className="bg-sky-800 text-sky-100">
        <tr>
          <th className="border border-sky-950">NAMA</th>
          <th className="border border-sky-950">EMAIL</th>
          <th className="border border-sky-950">NO HP</th>
          <th className="border border-sky-950">ACTION</th>
        </tr>
      </thead>
      <tbody className="bg-sky-100 text-sky-800">
        {data.map((item, index) => (
          <tr key={index} className="border border-sky-950">
            <td className="border border-sky-950 p-2">{item.nama}</td>
            <td className="border border-sky-950 p-2">{item.email}</td>
            <td className="border border-sky-950 p-2">{item.no_hp}</td>
            <td className="border border-sky-950 p-2">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setModal({
                      visibility: true,
                      title: "Edit Anggota",
                      button: "Edit",
                    });
                    formik.setValues({ ...item, formType: "edit" });
                  }}
                  variant="warning">
                  <BsPencilFill size={16} />
                </button>
                <button
                  onClick={() => {
                    setModal({
                      visibility: true,
                      title: "Delete Anggota",
                      button: "Delete",
                    });
                    formik.setValues({ ...item, formType: "delete" });
                  }}
                  variant="danger">
                  <BsTrashFill size={16} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
