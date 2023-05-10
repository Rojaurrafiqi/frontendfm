// import React, { useState } from "react";
// import Modal from "../../../component/Modal";
// const Pendaftaran = () => {
//   const [isModalDaftar, setIsModalDaftar] = useState(false);

//   const handleDaftar = () => {
//     setIsModalDaftar(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalDaftar(false);
//   };

//   return (
//     <div>
//       <Modal isModalDaftar={isModalDaftar} onClose={handleCloseModal}>
//         <div class="bg-white rounded-lg w-11/12 overflow-hidden shadow-xl transform transition-all max-w-screen-lg ">
//           <div class="flex justify-between px-4 py-2">
//             <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
//               Tambah Data Pasien
//             </h3>
//             <button
//               class="text-gray-600 hover:text-gray-800 focus:outline-none"
//               onClick={handleCloseModal}
//             >
//               <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div class="bg-gray-50 p-6">
//               <div class="flex flex-col md:flex-row">knln</div>
//             </div>
//             <div class="bg-gray-100 p-4 flex justify-end">
//               <button
//                 type="submit"
//                 class="px-4 py-2 bg-emerald hover:opacity-75 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
//                 onclick="toggleModal()"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Pendaftaran;
