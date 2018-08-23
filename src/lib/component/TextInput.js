
import React from "react";
import "./TextInput.scss";

const TextInput = ({ positionValue, notifyType,value }) => {
  let notifyClass, notifyPoistion, typeValue;
  if (positionValue) {
    notifyPoistion = "notifywrapper__" + positionValue;
  } else {
    notifyPoistion = "notifywrapper__topright";
  }
  if (notifyType) {
    typeValue = "notifywrapper__" + notifyType;
  } else {
    typeValue = "notifywrapper__success";

  }
  let defaultClass = "notifywrapper";
  if (value) {
    defaultClass = "notifywrapper__none";
  }
  notifyClass = `${defaultClass}  ${notifyPoistion}  ${typeValue}`;

  return (
    // <div className="simple-form-group">
    //   {label && <label className="simple-text-label">{label}</label>}
    //   <input
    //     type={type}
    //     className="simple-text-input"
    //     value={value}
    //     onChange={e => onChange && onChange(e.target.value)}
    //   />
    // </div>


    <div>
      <div className={notifyClass} >
        checking
        </div>
    </div>
  )
};


export default TextInput;
