import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import Modal from "../../component/Modal";

const PageTableIGD = () => {
  const [data, setData] = useState([]);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  function fetchData() {
    axios
      .get(`${API_URL}/form/default/igd/`)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleDeleteData = async (id) => {
    try {
      await axios.delete(`${API_URL}/form/default/igd/${id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  const handleConfirmDelete = () => {
    handleDeleteData(deleteUserId);
    setIsDeleteOpen(false);
    setDeleteUserId(null);
  };

  const handleShowModal = (id) => {
    setDeleteUserId(id);
    setIsDeleteOpen(true);
    console.log(id);
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-left px-1 bg-emerald300 font-semibold">
        Table Form Default IGD
      </div>
      <div className="container border border-state-300  bg-white p-5 text-left">
        <div class="overflow-x-auto">
          <table class="table-auto w-auto border-black border">
            <thead>
              <tr>
                <th class="border border-black px-4 py-1 w-10">No</th>
                <th class="border border-black px-4 py-1">Nama Form</th>
                <th class="border border-black px-4 py-1 w-20">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td class="border border-black px-4 py-1">{index + 1}</td>
                  <td class="border border-black px-4 py-1">
                    {item.nama_form}
                  </td>
                  <td class="border border-black px-4 py-1">
                    <button
                      onClick={() => handleShowModal(item.id)}
                      className="ml-1 py-0.1 px-1 mr-1 my-0.2 bg-red-600 text-white  hover:opacity-75"
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* modal delete */}
      <Modal isOpen={isDeleteOpen} onClose={handleCloseModal}>
        <div class="bg-white rounded-lg w-1/3 mt-10 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
          <div class="bg-gray-50 p-6">
            <div class="flex flex-col md:flex-row">
              <div class="w-full">
                <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                <p class="text-sm text-gray-500 px-8">
                  Do you really want to delete this data? This process cannot be
                  undone
                </p>
                <div className="mt-4">
                  <button
                    onClick={handleConfirmDelete}
                    class="px-4 py-2 mr-2 bg-red-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsDeleteOpen(false)}
                    class="px-4 py-2 ml-2 bg-gray-100 text-state-700 border border-black rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mr-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PageTableIGD;
