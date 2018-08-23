
import React from "react";
import "./TextInput.scss";

var TextInput = function TextInput(_ref) {
  var positionValue = _ref.positionValue,
      notifyType = _ref.notifyType,
      value = _ref.value;

  var notifyClass = void 0,
      notifyPoistion = void 0,
      typeValue = void 0;
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
  var defaultClass = "notifywrapper";
  if (value) {
    defaultClass = "notifywrapper__none";
  }
  notifyClass = defaultClass + "  " + notifyPoistion + "  " + typeValue;

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


    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: notifyClass },
        "checking"
      )
    )
  );
};

export default TextInput;