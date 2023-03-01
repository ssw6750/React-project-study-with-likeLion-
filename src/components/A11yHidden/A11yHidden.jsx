import React from 'react';
import style from './A11yHidden.module.css'

const A11yHidden = ({as: Component = "span", className="", ...restProps}) => {
  // focusable 로직

  // className 병합
  // 모듈 css 이름이 구별하기 힘듦...
  const combinedclassNames = (`${className} ${style.AllyHidden}`).trim();
  return <Component className={combinedclassNames} {...restProps} />;
};

export default A11yHidden;