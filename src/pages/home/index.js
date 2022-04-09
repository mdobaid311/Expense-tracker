import React from "react";
import TopFold from "../../components/TopFold";
import ExpenseList from "../../components/ExpenseList";
const Home = () => {
  return (
    <div className="home w-2/4 m-auto">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
