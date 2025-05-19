import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckformValid } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [IsSignInform, setIsSignInform] = useState();

  const [errorMessage, seterrorMessage] = useState(null);
 
  const dispatch = useDispatch()

  const name = useRef();
  const Email = useRef();
  const Password = useRef();

  const handleformvalidation = () => {
    const message = CheckformValid(Email.current.value, Password.current.value);
   
    seterrorMessage(message);

    if (message) return;
    if (!IsSignInform) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR
          })
            .then(() => {
              const { uid, Email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  Email: Email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

            
            })
            .catch((error) => {
              seterrorMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toogleSignInForm = () => {
    setIsSignInform(!IsSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_medium.jpg"
          alt="bag_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl">
          {IsSignInform ? "Sign In " : "Sign Up"}{" "}
        </h1>
        {!IsSignInform && (
          <input
            ref={name}
            type="Text"
            placeholder=" name "
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={Email}
          type="Text"
          placeholder="Email Address "
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password "
          className="p-2 my-4 w-full bg-gray-700"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          className=" bg-red-500 w-full rounded-lg p-2 my-6"
          onClick={handleformvalidation}
        >
          {IsSignInform ? "Sign In " : "Sign Up"}
        </button>
        <p className="my-4" onClick={toogleSignInForm}>
          {IsSignInform
            ? "New to Netflix?Sign Up now."
            : "Already Registered?Sign In now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
