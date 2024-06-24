import { NavLink,Navigate,Outlet } from "react-router-dom";
import { FaUserTie, FaHome} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { useAuth } from "../../store/auth";



export const AdminLayout=()=> {
  // if user is not admin rout to hin on home page
  const {user, isloading}=useAuth();
  console.log("admin layout", user);

  if(isloading){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/"></Navigate>
  }
  // -----------------------------------

  return <>
  <header>   
   <div className="container">
        <nav>
            <ul>
                <li><NavLink to="/admin/users"><FaUserTie /> users</NavLink></li>
                <li><NavLink to="/admin/contacts"><FaMessage /> contacts</NavLink></li>
                <li><NavLink to="/service"><MdMiscellaneousServices /> services</NavLink></li>
                <li><NavLink to="/"><FaHome /> Home</NavLink></li>
            </ul>
        </nav>
    </div>
    </header>
    <Outlet></Outlet>
  </>
};
