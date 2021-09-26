import React from 'react';

function getValidationText(textLength) {
  let validateText = '';
  if(textLength < 5) {
    validateText = 'Text too short';
  } else {
    validateText = 'Text long enough';
  }
  return validateText;
}

function validation(props) {
  return (
    <div>
      {getValidationText(props.textLength)}
    </div>
  )
}

export default validation;