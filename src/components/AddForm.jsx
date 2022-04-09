import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categories } from "../constants/add-expense";
import { addExpense } from "../redux/actions/expenses";
import "react-toastify/dist/ReactToastify.css";
import SucessModal from "./SucessModal";

const AddForm = () => {
  const categoriesList = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitles = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      console.log("no data");
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setIsModalOpen(true);
  };

  return (
    <div className="add-form  my-2 mx-3 p-6 flex flex-col flex-1 min-h-[60vh]">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SucessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="form-item my-3 p-1 rounded bg-white">
        <label className="bg-gray-400 py-1/2 px-3 rounded-sm mr-1 ">
          Title
        </label>
        <input
          className="text-xs border-none outline-none w-[70%]"
          type="text"
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => {
            handleTitles(e);
          }}
        />
      </div>
      <div className="form-item my-3 p-1 rounded bg-white">
        <label className="bg-gray-400 py-1/2 px-3 rounded-sm mr-1 ">
          Amount ₹
        </label>
        <input
          className="text-xs border-none outline-none w-[70%]"
          type="text"
          placeholder="Enter Amount"
          onChange={(e) => {
            handleAmount(e);
          }}
          value={amount}
        />
      </div>
      <div className=" flex flex-col flex-1">
        <div className=" relative w-1/2">
          <div
            className="flex justify-between bg-white items-center my-3 mx-3/4 p-1"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="flex absolute w-[100%] flex-col bg-white">
              {categoriesList.map((category) => (
                <div
                  className="w-[98%] flex justify-between py-3 cursor-pointer"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img
                    src={category.icon}
                    className="h-8 mr-5"
                    alt={category.title}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button flex justify-end cursor-pointer">
        <div
          className="flex border-[1px] border-solid border-black py-[2px] px-2 rounded-md cursor-pointer"
          onClick={() => handleSubmit()}
        >
          <label>Add</label>
          <i className="flex items-center ml-3/4 fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
