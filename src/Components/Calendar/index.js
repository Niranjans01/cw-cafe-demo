import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { BillBtn, CalendarIcon } from "./elements";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CalendarPicker from "@mui/lab/CalendarPicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { SubmitBtn } from "../FoodMenuTable/elements";

const Calendar = (props) => {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
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
          <div
            style={{
              width: "160px",
              paddingLeft: "10px",
              marginBottom: "15px",
            }}
          >
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
            <CalendarIcon onClick={() => setModal(true)} />
          </div>
        </div>
        <BillBtn style={{ width: "178px", textAlign: "center" }} to="/addbill">
          Add Invoice
        </BillBtn>
      </div>
      <Dialog
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        onBackdropClick={() => setModal(!modal)}
        open={modal}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </LocalizationProvider>
        <DialogActions>
          <Button onClick={()=>setModal(false)}>Set Date</Button>
        </DialogActions>
        {/* <SubmitBtn style={{alignSelf:'center'}}>Set Date</SubmitBtn> */}
      </Dialog>
    </>
  );
};

export default Calendar;
