import React from "react";
import Ticket from "./Ticket";

const TicketColumn = ({ tickets }) => {
  return (
    <div className="ticket-column">
      {tickets.length > 0
        ? tickets?.map((ticket) => <Ticket key={ticket?.id} ticket={ticket} />)
        : null}
    </div>
  );
};

export default TicketColumn;
