import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  /* padding: 0.2rem calc((100vw - 1000px) / 2); */
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #373535;
  display: flex;
  align-items: center;
  font-weight:500;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const User = styled(FaRegUserCircle)`
  display: none;
  color: #808080;
  display: block;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const Notification = styled(MdNotificationsActive)`
  display: none;
  color: #DC5D59;
  display: block;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left:40px;
  margin-right: 20px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: #DC5D59;
  padding: 5px 22px;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #df3934;
  }
`;
