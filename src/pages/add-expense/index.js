import React from "react";
import AddForm from "../../components/AddForm";
import TopFold from "../../components/TopFold";

const AddExpense = () => {
  return (
    <div className="add-expense w-2/4 m-auto">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
