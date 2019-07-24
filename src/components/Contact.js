import React from "react";

const Contact = () => {
  return (
    <form
      action="https://formspree.io/email@domain.tld"
      method="POST"
      id="contactSubmit"
    >
      <input type="text" name="name" />
      <button type="submit" for="form">
        Submit
      </button>
    </form>
  );
};

export default Contact;
