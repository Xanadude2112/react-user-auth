import "../styles/Navbar.scss"

function Navbar({ modalToggler }) {
  return (
    <div className="nav">
      <h1 className="nav-logo">✨USER AUTH 5000✨</h1>
      <button className="nav-button" onClick={()=> modalToggler()}>Sign Up</button>
    </div>
  )
}

export default Navbar;