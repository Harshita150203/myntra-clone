import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setToken, setUser } from "../store/userslice";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const isuser = useSelector((state) => state.user.isLoggedIn);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://quick-chat-nxlr.onrender.com/signin",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (resp.status == 200) {
        toast.success("Sign in successful", {
          position: "bottom-right",
        });
        dispatch(setToken(resp.data.token));
        dispatch(setUser(resp.data.name));
        navigate("/");
      } else {
        toast.error("Sign in failed", {
          position: "bottom-right",
        });
      }
    } catch (e) {
      toast.error("Sign in failed", {
        position: "bottom-right",
      });
      console.log(e);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://quick-chat-nxlr.onrender.com/signup",
        { email, password, name: username },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (resp.status == 200) {
        toast.success("Sign up successful", {
          position: "bottom-right",
        });
        setIsSignIn(true);
        setEmail("");
        setPassword("");
      } else {
        toast.error("Sign up failed", {
          position: "bottom-right",
        });
      }
    } catch (e) {
      toast.error("Sign up failed", {
        position: "bottom-right",
      });
      console.log(e);
    }
  };

  const handlelogout = async () => {
    try {
      const resp = await axios.get(
        "https://quick-chat-nxlr.onrender.com/logout",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (resp.data.success) {
        dispatch(logout());
        navigate("/");
        toast.success("Logged out successfully", {
          position: "bottom-right",
        });
      } else {
        toast.error("Failed to logout", {
          position: "bottom-right",
        });
      }
    } catch (e) {
      toast.error("Failed to logout", {
        position: "bottom-right",
      });
      console.log(e);
    }
  };

  return (
    <div className="profile-container">
      {isuser ? (
        <div className="profile-card">
          <h2 className="profile-name">Kartik</h2>
          <p className="profile-email">sehrawatkar@gmail.com</p>
          <button className="logout-button" onClick={handlelogout}>
            Log Out
          </button>
        </div>
      ) : isSignIn ? (
        <form onSubmit={handleSignIn} className="form">
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setIsSignIn(false);
                setEmail("");
                setPassword("");
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSignUp} className="form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsSignIn(true)}>Sign In</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Profile;
