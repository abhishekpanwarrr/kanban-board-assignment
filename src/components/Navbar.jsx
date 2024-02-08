import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = ({ onGroupingChange, onSortingChange }) => {
  const handleGroupingChange = (e) => {
    const option = e.target.value;
    onGroupingChange(option);
  };

  const handleSortingChange = (e) => {
    const option = e.target.value;
    onSortingChange(option);
  };

  return (
    <div className="controls">
      <div className="dropdown">
        <button className="dropbtn">
          {" "}
          <GiSettingsKnobs /> Display <FaChevronDown />
        </button>
        <div className="dropdown-content">
          <div className="dropdown-item">
            <span>Grouping</span>
            <label className="select">
              <select required="required" onChange={handleGroupingChange}>
                <option value="userId">User</option>
                <option value="status">Status</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <label className="select">
              <select onChange={handleSortingChange} required="required">
                <option value="title">Title</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
