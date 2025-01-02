import { useNavigate } from "react-router-dom";
import React from 'react';


export default function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Welcome to Car Rentals</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

// export default function HomeComp() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { loggedIn, user } = useSelector((state) => state.logged);
  //   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (isMounted) {
//       if (!loggedIn) {
//         navigate("/login");
//       }
//     }
//   }, [loggedIn, navigate, isMounted]);

//   const handleClick = () => {   
//     dispatch(logout());    
//     navigate("/login");
//   };

//   return (
//     <div>
//       <p>This is the Home Component</p>

//       {loggedIn ? (
//         <div>
//           <h3>Welcome, {user?.email || "User"}!</h3>
//           <p>Role: {user?.role?.rolename || "Not Assigned"}</p>
//           <button onClick={handleClick}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>You are not logged in. Please <a href="/login">Login</a></p>
//         </div>
//       )}
//     </div>
//   );
// }
// Remove this duplicate HomeComp function