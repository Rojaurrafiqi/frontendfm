import React, { useState, useRef, useEffect } from "react";

const SelectWithSearch = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    setSearchTerm("");
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={selectedOption ? selectedOption.label : searchTerm}
        onChange={handleSearchChange}
        onClick={() => setShowOptions(true)}
        ref={inputRef}
      />

      {showOptions && (
        <ul className="absolute left-0 mt-2 w-full bg-white rounded-md max-h-40 overflow-y-auto shadow">
          {filteredOptions.map((option) => (
            <li
              className="text-left px-4  cursor-pointer hover:bg-gray-200"
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectWithSearch;
