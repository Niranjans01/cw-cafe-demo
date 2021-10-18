import { MdSearch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import styled from "styled-components";

export const SearchIcon = styled(MdSearch)`
  color: #68656580;
  display: block;
  font-size: 1.8rem;
`;

export const MicIcon = styled(FaMicrophone)`
  color: #68656580;
  display: block;
  font-size: 1.3rem;
`;

export const SearchInput = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 178px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #e5e7eb;
  width: 830px;
  padding: 5px 22px;
  border-radius: 10px;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #9da3ae;
  }
`;
