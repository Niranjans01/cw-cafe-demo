import React from "react";
import {
  SearchIcon,
  MicIcon,
  Input,
  Form,
} from "./elements";

const SearchBar = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "54px" }}
      >
        <Form>
          <SearchIcon />
          <Input placeholder="Search ingredients" />
          <MicIcon />
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
