import Loading from "components/Common/Loading";
import { GET_USER } from "constants/localStorage";
import useViewport from "hooks/useViewport";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";
import { fetchTicketList, selectTicketLoading } from "./ticketSlice";

const TicketRoom = () => {
  const { width } = useViewport();
  const breakpoint = 767;
  const userLS = localStorage.getItem(GET_USER);
  const loading = useSelector(selectTicketLoading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchTicketList(params.id));
  }, []);

  if (!userLS) return <Redirect to="/login" />;

  if (loading) return <Loading />;

  return <div>{width < breakpoint ? <Mobile /> : <Desktop />}</div>;
};

export default TicketRoom;
