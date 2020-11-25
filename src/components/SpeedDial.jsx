import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    zIndex: theme.zIndex.speedDial,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },
  speedDialWrapper: {
    position: "relative",
    marginTop: theme.spacing(3),
    height: 500,
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    // '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    //   top: theme.spacing(2),
    //   left: theme.spacing(2),
    // },
  },
}));

const actions = [
  { icon: <GitHubIcon />, name: "GitHub" },
  { icon: <MailIcon />, name: "Email" },
  { icon: <TwitterIcon />, name: "Twitter" },
  { icon: <LinkedInIcon />, name: "LinkedIn" },
];

export default function SpeedDials() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState("up");
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="float">
      <div className={classes.speedDialWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
