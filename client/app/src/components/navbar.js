import {Link} from 'react-router-dom'

function Navbar(){
    return(
  
          <div className="container-fluid bg-dark">
            <div className="row text-center text-white p-3">
                <h1 className="col-md-10 text-white  text-start ">Crud App</h1>
                <Link to="/" className="col-1 text-white fs-4 text-decoration-none">Add</Link>
                <Link to="/get" className="col-1 text-white fs-4 text-decoration-none">Alluser</Link>

            </div>
          </div>
        
    );
}
export default Navbar;