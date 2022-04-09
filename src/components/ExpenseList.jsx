import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";

const ExpenseList = () => {
  // const [List, setList] = useState(second)

  const { expenseList: list, query } = useSelector((state) => state.expenses);

  const filteredList = list.filter((item) => item.title.includes(query));

  const notifySuccess = () => {
    toast.success("Expense Deleted");
  };

  return (
    <div className="expenseList my-3/4  flex flex-col flex-1">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((expense) => (
          <Card notifySuccess={notifySuccess} expense={expense} />
        ))
      ) : (
        <div className="flex justify-center items-center flex-col">
          <img
            src={require("../assets/images/empty.png")}
            className="empty-image h-96"
            alt="Empty List"
          />
          <label> Uh Oh! your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
