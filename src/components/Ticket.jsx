import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";
import { LuCircleDashed } from "react-icons/lu";
import { getRandomActiveColor } from "../helpers/facade";

const Ticket = ({ ticket }) => {
  const backgroundColor = ticket?.user.available
    ? getRandomActiveColor()
    : "#ccc";

  return (
    <div className="ticket">
      <div className="user-box">
        <p>{ticket?.id}</p>
        <div
          style={{
            position: "relative",
                      }}
        >
          <div className="custom-box">{ticket?.user.name?.[0] || "?"}</div>
          <div
            style={{
              backgroundColor,
              position: "absolute",
              bottom: 1,
              right: 1,
              width: "10px",
              borderRadius: "10px",
              height: "10px",
            }}
          ></div>
        </div>
      </div>
      {ticket?.title && (
        <div className="request">
          <LuCircleDashed color="#eee" />
          <h3>{ticket?.title}</h3>
        </div>
      )}
      <div
        className="request"
        style={{
          marginTop: "10px",
        }}
      >
        <BsThreeDots className="icon" />
        <span className="request icon">
          <GiPlainCircle fill="#BEC2C7" />
          <span className="tag">{ticket?.tag?.[0] || ""}</span>
        </span>
      </div>
    </div>
  );
};

export default Ticket;
