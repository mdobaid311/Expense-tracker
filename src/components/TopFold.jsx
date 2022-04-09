import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../redux/actions/expenses";
// import "./style.css";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handlerQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topfold flex justify-between py-3 mx-1.5 my-3 items-center">
      {window.location.pathname == "/" ? (
        <div className="home-topfold flex justify-between flex-1">
          <div className="searchbar w-2/4 bg-white rounded-xl ">
            <i className="flex items-center ml-1.5 fa-solid fa-magnifying-glass"></i>
            <input
              className="w-4/5 outline-none border-none py-2 ml-1.5 bg-white"
              type="text"
              placeholder="Search for expenses"
              onChange={(e) => {
                handlerQuery(e);
              }}
            />
          </div>
          <Link to="/add-expense">
            <div
              className="add-button flex items-center rounded
            text-xl px-2 cursor-pointer border-[1px] border-solid border-x-white"
            >
              <GrAddCircle className="flex items-center mr-1" />
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold flex-1 flex  justify-between">
          <Link to="/">
            <div className="add-topfold-button flex items-center  text-lg cursor-pointer">
              <i class="fa-solid fa-angle-left flex items-center mr-1"></i>
              <label>Back</label>
            </div>
          </Link>
          <div className="add-topfold-button flex items-center  text-lg cursor-pointer">
            <i class="fa-solid fa-ban flex items-center mr-1"></i>{" "}
            <label>Cancel</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
