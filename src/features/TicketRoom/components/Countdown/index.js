import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useMemo } from "react";
import { Fragment } from "react";

import Countdown, { zeroPad } from "react-countdown";

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const setTimeCount = useMemo(() => {
    // dùng useMemo để không bị reset
    return Date.now() + 300000;
  }, []);

  const style = {
    fontWeight: 500,
    fontSize: 34,
    lineHeight: "39px",
  };

  const handleTimeOut = () => {
    setOpen(true);
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <Fragment>
      <Countdown
        date={setTimeCount}
        renderer={({ minutes, seconds }) => (
          <span style={style} className="countdown-class">
            {zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        )}
        onComplete={() => handleTimeOut()}
      />
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thông báo!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn
            5 phút.
            <span onClick={handleReloadClick} className="pay-reload">
              Đặt vé lại
            </span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
