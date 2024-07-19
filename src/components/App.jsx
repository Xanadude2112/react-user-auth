import { useState } from "react";
import "../styles/App.scss";
import SignUpModal from "./SignUpModal";
import Navbar from "./Navbar";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const modalToggler = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="master">
      <Navbar modalToggler={modalToggler} />
      {modalOpen === true ? (
        <SignUpModal
          modalToggler={modalToggler}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <p className="test-text">SO MUCH EMPTY :3</p>
      )}
    </div>
  );
}

export default App;
