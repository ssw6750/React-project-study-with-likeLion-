import React, { useEffect, useRef, useState } from 'react';
import style from '@/components/SignInForm/SignInForm.module.css';
import SignInFormInput from '../SignInFormInput/SignInFormInput';
import { isEmail, isBlank } from '../../utils';

const initFormState = {
  email: '',
  password: '',
  validation: false,
};

// form action 속성 필수인가요?
// 폼요소는 인풋과 버튼만 다뤄야하는가?
const SignInForm = () => {
  // console.log(test)

  const formStateRef = useRef(initFormState);
  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    formStateRef.current.validation = false;
    checkValidation();
    !formStateRef.current.validation ? alert('로그인되었습니다') : null;
  };


  const checkValidation = () => {
    if (!isEmail(formStateRef.current['email'])) {
      setEmailValidation('Enter a vaild email address');
      formStateRef.current.validation = true;
    } else {
      setEmailValidation('');
    }
    if (!isBlank(formStateRef.current['password'])) {
      setPasswordValidation("Password can't be blank");
      formStateRef.current.validation = true;
    } else {
      setPasswordValidation('');
    }
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    console.log(formStateRef);
    if (formStateRef.current.validation) {
      checkValidation();
    }
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <div className={style.box}>
        <SignInFormInput
          label="이메일"
          visibleLabel={false}
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={handleChangeInput}
        />
        <div className={style.validation}>{emailValidation}</div>
      </div>
      <div className={style.box}>
        <SignInFormInput
          label="비밀번호"
          visibleLabel={false}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChangeInput}
        />
        <div className={style.validation}>{passwordValidation}</div>
      </div>
      <div className={style.forgotPassword}>
        <a href="/" className={style.linkTitle}>
          Forgot password?
        </a>
      </div>
      <button type="submit" className={style.loginButton}>
        Login
      </button>
      <div className={style.footer}>
        <span>Not yet member? </span>
        <a href="/" className={style.linkTitle}>
          Signup now
        </a>
      </div>
    </form>
  );
};

export default SignInForm;


function useValidation() {

}