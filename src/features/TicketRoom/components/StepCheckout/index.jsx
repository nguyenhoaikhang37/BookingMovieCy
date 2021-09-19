import React, { Fragment, useState } from "react";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import SeatIcon from "@material-ui/icons/CallToActionRounded";
import PaymentIcon from "@material-ui/icons/Payment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyles, ColorlibConnector } from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "features/Auth/authSlice";
import { memo } from "react";
const StepCheckout = () => {
  const classes = useStyles();
  const steps = ["CHỌN GHẾ", "THANH TOÁN", "KẾT QUẢ ĐẶT VÉ"];
  const userLogin = useSelector(selectAuthUser);

  function StepIcon(props) {
    const { active, completed } = props;
    const [activeStep1, setActiveStep1] = useState(0);

    const icons = {
      1: <SeatIcon size="big" />,
      2: <PaymentIcon />,
      3: <CheckCircleIcon />,
    };
    return (
      <div
        className={clsx(classes.stepIcon, {
          [classes.stepIconActive]: active,
          [classes.stepIconCompleted]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Fragment>
      <div className="ticket-step-user">
        <Link to="/" className="logo">
          <img
            src="https://image.flaticon.com/icons/png/512/1779/1779914.png"
            alt="logo"
            className="logo-img"
          />
          Movie<span>.</span>Cy
        </Link>
      </div>
      <Stepper
        alternativeLabel
        activeStep={0}
        className={classes.stepper}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              classes={{ label: classes.label }}
              StepIconComponent={StepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="ticket-step-user">
        <Fragment>
          <div className="menu-login-box">
            <div className="menu-login">
              <img
                src={`https://i.pravatar.cc/300?u=${userLogin?.hoTen}`}
                className="login-user login-step-img"
              />
            </div>
            <div className="menu-login-drop menu-step-drop">
              <div className="menu-login-name">
                <img
                  src={`https://i.pravatar.cc/300?u=${userLogin?.hoTen}`}
                  className="login-user"
                />
                <div className="menu-login-info">
                  <div>{userLogin?.hoTen}</div>
                  <div className="menu-login-email">{userLogin?.email}</div>
                </div>
              </div>
              <Link to="/profile" className="menu-login-text">
                <i className="bx bx-user menu-login-icon " />
                Profile
              </Link>
              <div onClick={handleLogOut} className="menu-login-text ">
                <i className="bx bx-log-out menu-login-icon " />
                Log out
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default memo(StepCheckout);
