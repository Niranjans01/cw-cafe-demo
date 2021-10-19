import { Avatar } from "@mui/material";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Notification,
  User,
  OptionIcon,
} from "./elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <Avatar alt="App Logo" src="http://images.squarespace-cdn.com/content/v1/571fa3c6859fd0a3d33b46ca/1461694742017-5MCMH6MHKSRXTD66ITBP/cottonwood-cafe-sisters-oregon-breakfast-and-lunch-restaurant.png" />
          <NavLink to="/dashboard" activeStyle>
            Dashboard
          </NavLink>
          <NavLink to="/menu" activeStyle>
            Menu
          </NavLink>
          <NavLink to="/ingredients" activeStyle>
            Ingredients
          </NavLink>
          <NavLink to="/recipes" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/resources" activeStyle>
            Resources
          </NavLink>
          <NavLink to="/vendors" activeStyle>
            Vendors
          </NavLink>
          <NavBtnLink to="/restock">Restock</NavBtnLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/profile" activeStyle>
            <Notification />
          </NavLink>
          <NavLink to="/profile" activeStyle>
            <div>
              Welcome back <br /> Stephen King
            </div>
          </NavLink>
          <NavLink to="/signin">
            <User />
            <OptionIcon />
          </NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
