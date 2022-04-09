import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
