import { FiCalendar } from "react-icons/fi";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Box = styled.div`
  margin-top: 200px;
  height: 150px;
  width: 200px;
  display: flex;
`;

export const CalendarIcon = styled(FiCalendar)`
  color: #000;
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const BillBtn = styled(Link)`
  border-radius: 15px;
  background: #DC5D59;
  padding: 5px 22px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  color: #ffffff;
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

export const StyledText = styled.p`
  color: grey;
`;
