import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const DashboardCard = ({ hide, year, value, tableName }) => (
  <Box
    height={150}
    width="22.2rem"
    bgcolor="white"
    boxShadow="0px 4px 6px rgba(156, 163, 175, 0.15)"
    borderRadius="1rem"
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    // sx={{ width: { sm: "20rem" } }}
  >
    <Typography variant="h6" sx={{ mt: 2, ml: 3 }}>
      {hide}
    </Typography>
    <Typography
      variant="h5"
      position="relative"
      bottom={14}
      left={290}
      bgcolor="#EBEEFD"
      color="#3A57E8"
      borderRadius="1rem"
      fontFamily="inter"
      fontSize="1rem"
      p={0}
      // sx={{ ml: { sm: -4 } }}
    >
      {year}
    </Typography>
    <Box position="relative" bottom={42} right={16} sx={{}}>
      <Typography variant="h4" fontWeight={500} ml={5} mt={5}>
        {value}
      </Typography>
      <Typography variant="body2" mt={1} ml={5} color="#8A92A6" sx={{}}>
        {tableName}
      </Typography>
    </Box>
  </Box>
);
