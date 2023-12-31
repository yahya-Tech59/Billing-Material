import React, { useEffect, useState, useContext } from "react";

import { columns } from "./CustomerColumns";
import { Header } from "../../layouts/Header";
// import { Table } from "../../components/Table";
import { DataGrid } from "@mui/x-data-grid";
import { AddCustomer } from "../../Models/Customer/AddCustomer";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../Context/Context";

import { Search } from "../../components/Search";
import useCustomersStore from "../../Services/CustomerApi";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Pagination } from "../../components/Pagination";

export const Customers = () => {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const { customers, loading, fetchCustomer } = useCustomersStore();

  const { currentPage } = useContext(Context);

  useEffect(() => {
    fetchCustomer(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return (
      <Typography variant="h2" sx={{ ml: "53rem" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box sx={{ ml: 3 }}>
      <Header />
      <Box
        sx={{
          bgcolor: "white",
          width: "96rem",
          mt: 3,
          mb: 6,

          boxShadow: "0px 4px 6px rgba(156, 163, 175, 0.15)",
          pb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, pt: 3, ml: 4 }}>
          Customers
        </Typography>

        <Box sx={{ ml: "70.5rem", mb: 4.3 }}>
          <Button
            onClick={() => setShowAddCustomer(true)}
            sx={{
              position: "absolute",
              display: "flex",
              gap: 1,
              bgcolor: "#3A57E8",
              color: "white",
              borderRadius: 2,
              ":hover": {
                bgcolor: "#4762e9",
              },
              cursor: "pointer",
            }}
          >
            Add Customer
            <Icon sx={{ mb: 1 }}>
              <IoMdAdd className=" text-2xl" />
            </Icon>
          </Button>
          {showAddCustomer && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "full",
                height: "full",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                zIndex: 10,
              }}
            >
              <AddCustomer onClose={() => setShowAddCustomer(false)} />
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 2 }} className="mb-2">
          <Search label="Search" size="small" />
        </Box>

        <Box sx={{ height: 630, width: "95%", ml: 5, mb: 4 }}>
          <DataGrid
            rows={customers}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </Box>

        <Box sx={{ mt: 3, pb: 1 }}>
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};
