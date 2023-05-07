import React, { useState } from "react";
import Sidebar from "../templates/sidebar";
import Header from "../templates/header";
import { useNavigate } from "react-router-dom";
import PageForm from "./PageForm";
import PageTableIGD from "./PageTableIGD";
import PageTableRalan from "./PageTableRalan";
import PageTableRanap from "./PageTableRanap";

const Form = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [isPageForm, setIsPageForm] = useState(true);
  const [isPageFormActive, setIsPageFormActive] = useState(true);
  const [isPageTableIGD, setIsPageTableIGD] = useState(false);
  const [isPageTableIGDActive, setIsPageTableIGDActive] = useState(false);
  const [isPageTableRalan, setIsPageTableRalan] = useState(false);
  const [isPageTableRalanActive, setIsPageTableRalanActive] = useState(false);
  const [isPageTableRanap, setIsPageTableRanap] = useState(false);
  const [isPageTableRanapActive, setIsPageTableRanapActive] = useState(false);

  function handlePageForm() {
    setIsPageForm(true);
    setIsPageTableIGD(false);
    setIsPageTableRalan(false);
    setIsPageTableRanap(false);

    setIsPageFormActive(true);
    setIsPageTableIGDActive(false);
    setIsPageTableRalanActive(false);
    setIsPageTableRanapActive(false);
  }

  function handleTableRalan() {
    setIsPageTableRalan(true);
    setIsPageForm(false);
    setIsPageTableIGD(false);
    setIsPageTableRanap(false);

    setIsPageTableRalanActive(true);
    setIsPageFormActive(false);
    setIsPageTableIGDActive(false);
    setIsPageTableRanapActive(false);
  }
  function handleTableRanap() {
    setIsPageTableRanap(true);
    setIsPageForm(false);
    setIsPageTableIGD(false);
    setIsPageTableRalan(false);

    setIsPageTableRanapActive(true);
    setIsPageFormActive(false);
    setIsPageTableIGDActive(false);
    setIsPageTableRalanActive(false);
  }
  function handleTableIGD() {
    setIsPageTableIGD(true);
    setIsPageForm(false);
    setIsPageTableRalan(false);
    setIsPageTableRanap(false);

    setIsPageTableIGDActive(true);
    setIsPageFormActive(false);
    setIsPageTableRalanActive(false);
    setIsPageTableRanapActive(false);
  }

  return (
    <div class="h-full">
      <div class="flex">
        <div class="flex-none">
          <Sidebar />
        </div>
        <div class="flex-auto bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
          <Header />
          <div className="flex justify-between my-3 mx-4">
            <button
              className="py-0.2 px-1 mr-1 bg-emerald text-white  hover:opacity-75"
              type="button"
              onClick={handleBack}
            >
              KEMBALI
            </button>
            <div className="table-button">
              <div className="flex">
                <button
                  onClick={handlePageForm}
                  className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                    isPageFormActive ? "opacity-75" : ""
                  }`}
                  type="button"
                >
                  Form
                </button>
                <button
                  onClick={handleTableIGD}
                  className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                    isPageTableIGDActive ? "opacity-75" : ""
                  }`}
                  type="button"
                >
                  Table Default IGD
                </button>
                <button
                  onClick={handleTableRanap}
                  className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                    isPageTableRanapActive ? "opacity-75" : ""
                  }`}
                  type="button"
                >
                  Table Default Ranap
                </button>
                <button
                  onClick={handleTableRalan}
                  className={`ml-1 py-0.2 px-1 mr-1 bg-emerald text-white hover:opacity-75 ${
                    isPageTableRalanActive ? "opacity-75" : ""
                  }`}
                  type="button"
                >
                  Table Default Ralan
                </button>
              </div>
            </div>
          </div>

          {isPageForm && <PageForm />}
          {isPageTableIGD && <PageTableIGD />}
          {isPageTableRalan && <PageTableRalan />}
          {isPageTableRanap && <PageTableRanap />}
        </div>
      </div>
    </div>
  );
};

export default Form;
