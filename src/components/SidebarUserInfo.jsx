import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { cart, heart, notif, user } from "../assets/img";

const SidebarUserInfo = () => {
  return (
    <Box mt={10} display="flex" flexDirection="column">
      <img
        src={user}
        alt="user"
        style={{
          width: "7rem",
          height: "7rem",
          marginLeft: 80,
        }}
      />
      <Button variant="h2" fontSize={18}>
        Jama Abdi
      </Button>
      <Typography
        variant="h6"
        color="#8A92A6"
        ml={11}
        className="text-slate-400 ml-28"
      >
        @Abdi
      </Typography>

      <Box display="flex" ml={8} mt={2} gap={2}>
        <img src={cart} alt="cart" />
        <img src={heart} alt="cart" />
        <img src={notif} alt="cart" />
      </Box>
    </Box>
  );
};

export default SidebarUserInfo;
