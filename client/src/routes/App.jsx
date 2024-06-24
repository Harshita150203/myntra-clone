import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../store/userslice";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const isuser = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    const setusr = async () => {
      try {
        if (!isuser) {
          const response = await axios.get("http://localhost:8080/user", {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          if (response.status != 200) {
            throw new Error("Failed to fetch user details");
          }
          dispatch(setUser(response.data.name));
        }
      } catch (error) {
        console.log(error);
      }
    };
    setusr();
  }, [isuser]);

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
