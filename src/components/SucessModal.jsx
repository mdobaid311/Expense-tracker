import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#71ccca",
    borderRadius: "12px",
  },
};
const SucessModal = ({isModalOpen,setIsModalOpen}) => {
  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <div className="modalInner flex flex-col items-center ">
        <label>Expense Added Sucessfully</label>
        <img
          src={require("../assets/images/added-image.png")}
          alt="Expense Added Sucessfully"
          className="added image h-96"
        />
        <Link to="/">
          <div className="takehomebutton border-[1px] border-solid border-black px-2 py-1 flex rounded justify-center items-center cursor-pointer">
            <i className="fa-solid fa-house mr-2"></i>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SucessModal;
