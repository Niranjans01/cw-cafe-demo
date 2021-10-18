import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FoodMenuTable from "../FoodMenuTable";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    components: {
      // Name of the component
      MuiTabs: {
        styleOverrides: {
          // Name of the slot
          indicator: {
            background: "#DC5D59",
          },
        },
      },
    },
  });

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "85px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <ThemeProvider theme={theme}>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab
                style={{
                  fontWeight: "bold",
                  color: "#373535",
                  textTransform: "none",
                }}
                label="Prepared"
                value="1"
              />
              <Tab
                style={{
                  fontWeight: "bold",
                  color: "#373535",
                  textTransform: "none",
                }}
                label="Pre-Prepared"
                value="2"
              />
            </TabList>
          </ThemeProvider>
        </Box>
        <TabPanel value="1">
          <FoodMenuTable />
        </TabPanel>
        <TabPanel value="2">Another Table</TabPanel>
      </TabContext>
    </Box>
  );
}
