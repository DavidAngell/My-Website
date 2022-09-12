import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer" style={{padding: "0.5rem"}}>
         <i className={icon} style={{marginRight: "0.25rem", marginLeft: "-0.25rem"}}/> {title}
      </a>
   );
}

export default IconLink;