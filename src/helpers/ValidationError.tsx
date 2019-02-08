import React from 'react';
import { VALIDATIONS_ERRORS } from '../constants/errors';

interface IProp {
  error: string
}

const ValidationError = ({ error }: IProp) => (
  <>
    <div className="validationError">
      {VALIDATIONS_ERRORS[error] && VALIDATIONS_ERRORS[error]}
    </div>
  </>
)

export default ValidationError;
