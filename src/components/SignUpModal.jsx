import "../styles/SignUpModal.scss";

function SignIn({ modalToggler, name, setName, email, setEmail, password, setPassword }) {
  const signInHandler = function () {
    console.log(
      " USER NAME:",
      name,
      " USER EMAIL:",
      email,
      " USER PASSWORD:",
      password
    );
  }

  return (
    <div className="modal">
      <div className="overlay">
        <div className="user-interact">
          <h1 className="close-modal" onClick={()=>modalToggler()}>X</h1>
          <h2 className="sign-in">Sign Up</h2>
          <div className="inputs-div">
            <input
              type="text"
              className=""
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button onClick={signInHandler}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
