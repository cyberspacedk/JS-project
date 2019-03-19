import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";

const ButtonHighlights = ({text, color,link}) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        backgroundColor: '#fdba0a',
        color: color,
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="buy" />
     {text}
    </Button>
  );
};

export default ButtonHighlights;
