class Validate {
  static checkValidity(value, rules) {
    try {
      let isValid = true;
      if (rules.required) {
        isValid = value.trim() !== "" && isValid;
      }

      if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
      }

      if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
      }

      if (rules.charactersOnly) {
        isValid = /^[a-zA-Z]*$/.test(value);
      }
      return isValid;
    } catch (error) {
      console.log(
        "Some exception occurred while validating the field " + error
      );
    }
  }
}

export default Validate;
