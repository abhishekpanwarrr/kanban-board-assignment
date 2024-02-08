import React from "react";
import TicketColumn from "./TicketColumn";
import { TiPlus } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { checkGrouping } from "../helpers/facade";

const TicketsBoard = ({ groupName, tickets, groupingOption }) => {
  return (
    <div className="tickets-board">
      <div className="group-box">
        <div className="group-info">
          {checkGrouping(groupingOption, groupName)}
          <h2>{groupName}</h2>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="group-info">
          <TiPlus color="##8E9197" />
          <BsThreeDots color="##8E9197" />
        </div>
      </div>
      <TicketColumn tickets={tickets} />
    </div>
  );
};

export default TicketsBoard;
