import React from 'react';
import style from './SignInContainer.module.css'
import SignInForm from '../SignInForm/SignInForm';


const SignInContainer = () => {
  return (
    <div className={style.Container}>
      {/* form에 타이틀있을때 어떻게 해줘야할지 궁금
      세분화합시다... */}
      <h2 className={style.Title}>Login Form</h2>
      <SignInForm/>
    </div>
  );
};

export default SignInContainer;