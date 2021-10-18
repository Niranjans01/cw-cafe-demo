import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Form, Input } from "../SearchBar/elements";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

const FoodMenuTable = () => {
  const [menu] = useState([
    { name: "American Cheese", price: "20", units: "20", amount: "10" },
    { name: "Anaheim Peppers", price: "20", units: "20", amount: "10" },
    { name: "Banquet Beer", price: "20", units: "20", amount: "10" },
    { name: "Black Pepper", price: "20", units: "20", amount: "10" },
    { name: "Brown Sugar", price: "20", units: "20", amount: "10" },
    { name: "Butter milk", price: "20", units: "20", amount: "10" },
    { name: "Blended Oil", price: "20", units: "20", amount: "10" },
    { name: "California Dry Red Peppers", price: "20", units: "20", amount: "10" },
    { name: "Chicken Breast", price: "20", units: "20", amount: "10" },
    { name: "Chili Powder", price: "20", units: "20", amount: "10" },
  ]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {menu.map((val, i) => (
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            container
            item
            xs={6}
            md={6}
            spacing={1}
          >
            <Grid style={{ width: "200px" }} item>
              <Typography>{val.name}</Typography>
            </Grid>
            <Grid item>
              <Form style={{ width: "20px", boxShadow: "0 0 0" }}>
                <AddIcon style={{ fontSize: "10px" }} />
                <Input
                  value={val.amount}
                  style={{
                    height: "18px",
                    borderRadius: "5px",
                    width: "20px",
                    fontWeight: "bold",
                    background: "#fff",
                  }}
                />
                <RemoveIcon style={{ fontSize: "10px" }} />
              </Form>
            </Grid>
            <Grid item>
              <select
                style={{
                  width: "100px",
                  background: "#e5e7eb",
                  border: "none",
                  padding: "5px 22px",
                  borderRadius: "5px",
                }}
                name="units"
                id="units"
              >
                <option value="0" selected="selected">
                  {val.units} Units
                </option>
                <option value="kilo">Kg</option>
              </select>
            </Grid>
            <Grid item>
              <Form style={{ width: "50px", boxShadow: "0 0 0" }}>
                <AttachMoneyIcon style={{ fontSize: "15px" }} />
                <Input value={val.price} />
              </Form>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodMenuTable;
