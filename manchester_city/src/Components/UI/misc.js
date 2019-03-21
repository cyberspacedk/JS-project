import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {

  const template = <div>tag</div>;

  // return linked text or simple text

  if (props.link) {
    return <Link to={props.linkto}>{template}</Link>
  } else {
    return template;
  }
  
};
