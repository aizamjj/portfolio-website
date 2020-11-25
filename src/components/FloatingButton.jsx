import React, { useState, useEffect } from "react";
import Add from "@material-ui/icons/Add";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  const actions = [
    { icon: <GitHubIcon />, name: "GitHub" },
    { icon: <MailIcon />, name: "Email" },
    { icon: <TwitterIcon />, name: "Twitter" },
    { icon: <LinkedInIcon />, name: "LinkedIn" },
  ];

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div>
      <div id="floating-btn" className="floating-btn">
        <a onClick={handleClick}>
          <Add style={{ height: 40, width: 40 }} />
        </a>
      </div>
      {/* <div>
          {actions.map((action) => (
              <Action
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              // onClick={handleClose}
              />
              ))
          }
        </div> */}
    </div>
  );
};

export default FloatingButton;
