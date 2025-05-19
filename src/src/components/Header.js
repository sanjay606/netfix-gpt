import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, Email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            Email: Email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe onAuth for unmounting .
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-48 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex ">
          <img
            className="w-10 h-10 my-5 rounded-2xl"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white  mx-3 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
