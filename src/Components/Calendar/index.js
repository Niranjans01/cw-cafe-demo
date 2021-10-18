import Typography from "@mui/material/Typography";
import React from "react";
import { BillBtn, CalendarIcon } from "./elements";

const Calendar = () => (
  <>
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "178px",
          marginTop: "150px",
        }}
      >
        <div style={{ width: "160px", paddingLeft: "10px", marginBottom:'15px' }}>
          <Typography
            style={{
              color: "#ccc",
            }}
            variant="subtitle1"
          >
            Today
          </Typography>
          <Typography
            variant="h4"
            // style={{
            //   color: "#000",
            //   fontSize: "30px",
            //   fontWeight: "500",
            //   lineHeight: "0",
            // }}
          >
            Aug 23
          </Typography>
        </div>
        <div
          style={{
            width: "17px",
            height: "17px",
            borderRadius: "9px",
            background: "#ccc",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarIcon />
        </div>
      </div>
      <BillBtn style={{ width: "178px", textAlign: "center" }} to="/addbill">
        Add bill
      </BillBtn>
    </div>
  </>
);

export default Calendar;
