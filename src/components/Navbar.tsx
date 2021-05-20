
const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-5">
  <a className="navbar-brand mt-3 text-info mx-3" href="/">Navbar</a>
  <button className="navbar-toggler" 
  type="button" data-toggle="collapse" 
  data-target="#navbarNav" 
  aria-controls="navbarNav" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto mt-3">
      <li className="nav-item active">
        <a className="nav-link text-warning" href="/">Home</a>
      </li>
      </ul>
      </div>
      </nav>
      </div>
 


    )
};

export default Navbar;