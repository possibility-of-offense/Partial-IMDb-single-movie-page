function createValidationRule(errorMessage, validator) {
  return {
    errorMessage,
    validate: validator,
  };
}

const requireValidator = () => {
  return createValidationRule(
    "The field is required",
    (val) => val.length !== 0
  );
};

const validateBetween = (min, max) => {
  return createValidationRule(
    "The field should be between 0 and 10",
    (val) => +val > min && +val <= max
  );
};

export { requireValidator, validateBetween };
