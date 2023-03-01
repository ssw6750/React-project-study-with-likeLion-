import React, {useId} from 'react';
import style from '@/components/SignInFormInput/SignInFormInput.module.css';
import A11yHidden from '@/components/A11yHidden/A11yHidden.jsx'


const SignInFormInput = ({ label = '', visibleLabel = true, ...restProps }) => {
  const id = useId()
  return (  
    <>
      {renderLabel(label, visibleLabel, id)}
      <input className={style.Input} id={id} {...restProps} />
    </>
  );
};

function renderLabel(label, visibleLabel, id ) {
  return visibleLabel?(
    <label htmlFor={id}>{label}</label>
  ):(<A11yHidden as='label'>{label}</A11yHidden>)
}

export default SignInFormInput;
