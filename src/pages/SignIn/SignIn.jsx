import React from 'react';
import style from './SignIn.module.css';
import A11yHidden from '@/components/A11yHidden/A11yHidden';
import SignInContainer from '../../components/SignInContainer/SignInContainer';

const SignIn = () => {
  return (
    <>
      <A11yHidden as="h1">로그인 폼 구현 연습하기</A11yHidden>
      <div className={style.Layout}>
        <SignInContainer></SignInContainer>
      </div>;
    </>
  );
};

export default SignIn;
