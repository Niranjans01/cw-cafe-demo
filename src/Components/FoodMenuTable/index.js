import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Form, Input } from "../SearchBar/elements";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";
import { SubmitBtn } from "./elements";

const FoodMenuTable = () => {
  const [menu, setMenu] = useState([
    { name: "American Cheese", price: "", units: "", amount: 0 },
    { name: "Anaheim Peppers", price: "", units: "", amount: 0 },
    { name: "Banquet Beer", price: "", units: "", amount: 0 },
    { name: "Black Pepper", price: "", units: "", amount: 0 },
    { name: "Brown Sugar", price: "", units: "", amount: 0 },
    { name: "Butter milk", price: "", units: "", amount: 0 },
    { name: "Blended Oil", price: "", units: "", amount: 0 },
    {
      name: "California Dry Red Peppers",
      price: "",
      units: "",
      amount: 0,
    },
    { name: "Chicken Breast", price: "", units: "", amount: 0 },
    { name: "Chili Powder", price: "", units: "", amount: 0 },
  ]);

  const updateMenuAmount = (val, operation) => {
    let objIndex = menu.findIndex((obj) => obj.name === val.name);
    menu[objIndex].amount = menu[objIndex].amount + operation;
    let updatedData = [...menu];
    setMenu(updatedData);
    //
  };

  const updateMenuPrice = (val, updatedVal) => {
    console.log(updatedVal, val);
    let objIndex = menu.findIndex((obj) => obj.name === val.name);
    menu[objIndex].price = updatedVal;
    let updatedData = [...menu];
    setMenu(updatedData);
    //
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        alignItems:'center',
        flexDirection: "column",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {menu.map((val, i) => (
          <Grid
            key={i.toString()}
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
                <AddIcon
                  onClick={() => updateMenuAmount(val, +1)}
                  style={{ fontSize: "10px", cursor: "pointer" }}
                />
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
                <RemoveIcon
                  onClick={() => updateMenuAmount(val, val.amount > 0 ? -1 : 0)}
                  style={{
                    fontSize: "10px",
                    cursor: "pointer",
                  }}
                />
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
                  Units
                </option>
                <option value="kilo">KG</option>
                <option value="kilo">LBS</option>
                <option value="kilo">Grams</option>
                <option value="kilo">Tonnes</option>
              </select>
            </Grid>
            <Grid item>
              <Form style={{ width: "50px", boxShadow: "0 0 0" }}>
                <AttachMoneyIcon style={{ fontSize: "15px" }} />
                <Input
                  onChange={(p) => updateMenuPrice(val, p.target.value)}
                  value={val.price}
                />
              </Form>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <SubmitBtn style={{ width: "178px", textAlign: "center" }}>
        Submit
      </SubmitBtn>
    </Box>
  );
};

export default FoodMenuTable;
