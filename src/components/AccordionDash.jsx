import React from "react";
import EachLink from "./EachLink";

const AccordionDash = ({ acArray ,open}) => {
  return (
    <div className={`${!open && 'hidden' }`}>
      <ul>
        {acArray.map(({ id, name, link }) => <EachLink key={id} name={name} />  )}
      </ul>
    </div>
  );
};

export default AccordionDash;
