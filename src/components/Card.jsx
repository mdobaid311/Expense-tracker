import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/expenses";

const Card = ({ expense, notifySuccess }) => {
  const time = moment(expense.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpense(expense));
  };
  console.log(expense);
  return (
    <div
      className="bg-white py-3 my-[2px] flex justify-between items-center"
      style={{ borderRight: `6px solid ${expense.category.color}` }}
    >
      <div className="card-image-container h-10 ml-3">
        <img
          src={expense.category.icon}
          alt={expense.category.title}
          className="h-full"
        />
      </div>
      <div className="card-info flex flex-1 flex-col ml-3">
        <label className="card-title">{expense.title}</label>
        <label className="card-time text-gray-600 text-xs">{time}</label>
      </div>
      <div className="card-right flex flex-col-reverse items-center justify-between mr-3">
        <div>
          <label className="card-amount text-sm font-medium">
            ₹ {expense.amount}
          </label>
        </div>
        <div className="delete-icon text-xs" onClick={handleDelete}>
          <i class="fa-solid fa-trash"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
