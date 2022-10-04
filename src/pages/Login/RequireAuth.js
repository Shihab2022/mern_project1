import { Navigate, useLocation } from "react-router-dom";
// import auth from '../../firebase.init'
// import Loading from '../Sheared/Loading'
function RequireAuth({ children }) {
    let user = localStorage.getItem("user");
    // const [user, loading] = useAuthState(auth);
    let location = useLocation();

  
    // if(loading) {
    //     return <Loading></Loading>
    // }
    if (!user) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  export default RequireAuth