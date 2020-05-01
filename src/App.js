import React, { useState } from "react";
import "./styles.css";
import Phone from "./../phone.png";
import Desktop from "./../desktop.png";
import Email from "./../e-mail.png";

const options = {
  website: { value: "My coach site", icon: Desktop },
  phone: { value: "(818) -545-1765", icon: Phone },
  email: { value: "coutrney.burton@gmail.com", icon: Email }
};

const FloatOption = ({ value, icon }) => {
  return (
    <div className="float-option-container">
      <div className="float-option-label">{value}</div>
      <div className="float-option-icon">
        <img alt={`${value}-alt`} src={icon} />
      </div>
    </div>
  );
};

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="modal-background" />
      <div className="modal-container">
        <FloatOption {...options.website} />
        <FloatOption {...options.phone} />
        <FloatOption {...options.email} />
        <div className="float-close-icon" onClick={onClose}>
          X
        </div>
      </div>
    </>
  );
};

const PopOver = () => {
  return (
    <>
      <div className="popOver">
        <span>
          Hi, I'm your Coach, Courtney! Reach out to me if you need help or have
          any questions.
        </span>
      </div>
      <div className="arrow-down" />
    </>
  );
};

export default function App() {
  const [openCoachOptions, setOpenCoachOptions] = useState(false);

  const closeOrOpenModal = () => {
    setOpenCoachOptions(oldState => !oldState);
  };

  return (
    <div className="App">
      {!openCoachOptions && (
        <div className="float-avatar" onClick={closeOrOpenModal}>
          <PopOver />
          <img
            alt="logo"
            className="avatar"
            src="https://images.vexels.com/media/users/3/147101/isolated/lists/b4a49d4b864c74bb73de63f080ad7930-boton-de-perfil-de-instagram.png"
          />
        </div>
      )}
      {openCoachOptions && <Modal onClose={closeOrOpenModal} />}
    </div>
  );
}
