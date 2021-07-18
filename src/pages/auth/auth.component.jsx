import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./auth.styles.scss";

const Auth = () => {
  return (
    <div>
      <div className='sign-in-and-sign-up'>
        <SignIn />
      </div>
    </div>
  );
};

export default Auth;
