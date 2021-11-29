//functional Components
import PropTypes from "prop-types";
import React from "react";

const FirstApp = ({ greeting, subtitle }) => {
  return (
    <>
      <h2> {greeting} </h2>
      {/* <pre>{ JSON.stringify({ greeting, subtitle}, null, 3) }</pre> show objects*/}
      <p>{subtitle}</p>
    </>
  );
};

//definer como son los parametros
FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  greeting: "Hello world",
  subtitle: "Bye",
};

export default FirstApp;
