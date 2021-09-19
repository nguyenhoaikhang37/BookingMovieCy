import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formPayment: (props) => ({
    // display: props.isSelectedSeat ? "block" : "none",
    paddingTop: 12,
  }),
  formPaymentItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  img: {
    borderRadius: "5px",
    marginLeft: "15px",
    marginRight: "15px",
    maxWidth: "40px",
  },
  input: {
    flexShrink: 0,
    width: "22px",
    height: "22px",
    cursor: "pointer",
    "-webkit-appearance": "none",
    border: "1px solid #ec7532",
    borderRadius: "50%",
    outline: 0,
    "&:before": {
      content: "''",
      display: "block",
      width: "50%",
      height: "50%",
      margin: "25% auto",
      borderRadius: "50%",
    },
    "&:checked:before": {
      background: "#ec7532",
    },
  },
});

export default useStyles;
