import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import handleForm from "../form_default/handleForm";

const Form_igd = () => {
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}/form/default/igd`);
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleClick = (event) => {
    const value = event.currentTarget.getAttribute("value");
    setResult(handleForm(value));
    setActiveLink(value);
  };

  return (
    <div>
      <div className="container pb-5">
        <div class="flex">
          <div className="container bg-white m-4 w-1/5 text-left">
            <div class="overflow-x-auto w-full">
              <div className="pl-2 bg-emerald300 font-semibold">Form</div>
              <div className="text-sm">
                {data.map((item) => (
                  <ul>
                    <li
                      key={item.id}
                      className={`hover:text-white hover:bg-emerald px-2 my-0.5 ${
                        activeLink === item.nama_form
                          ? "bg-emerald text-white"
                          : ""
                      }`}
                    >
                      <a
                        className="cursor-pointer"
                        onClick={handleClick}
                        value={item.nama_form}
                      >
                        {item.nama_form.replace(/([A-Z])/g, " $1").trim()}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="container bg-white m-4 w-4/5">{result && result}</div>
        </div>
      </div>
    </div>
  );
};

export default Form_igd;
