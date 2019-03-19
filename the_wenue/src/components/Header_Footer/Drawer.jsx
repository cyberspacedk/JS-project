import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Drawerheader = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
    
      <List component="nav">
        <ListItem button onClick={() => console.log("f")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("f")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => console.log("f")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("f")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("f")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerheader;
