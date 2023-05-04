import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import handleForm from "../form_default/handleForm";

const Form_igd = () => {
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);

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
  };

  return (
    <div>
      <div className="container pb-5">
        <div class="flex">
          <div className="container bg-white m-4 w-1/5">
            <div className="text-left pl-2 bg-emerald300 font-semibold">
              Form
            </div>
            <div className="text-left text-sm">
              {data.map((item) => (
                <ul className="px-2 ">
                  <li key={item.id}>
                    <button onClick={handleClick} value={item.nama_form}>
                      {item.nama_form.replace(/([A-Z])/g, " $1").trim()}
                    </button>
                  </li>
                </ul>
                // <div className="px-2 text-sm text-left" key={item.id}>
                //   <button onClick={handleClick} value={item.nama_form}>
                //     {item.nama_form.replace(/([A-Z])/g, " $1").trim()}
                //   </button>
                // </div>
              ))}
            </div>
          </div>

          <div className="container bg-white m-4 w-4/5">{result && result}</div>
        </div>
      </div>
    </div>
  );
};

export default Form_igd;
