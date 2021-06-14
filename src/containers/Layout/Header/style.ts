import styled from "styled-components";

const SHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e3e3;
  padding: 0 10px;
  .menu {
    display: flex;
    li {
      cursor: pointer;
      list-style: none;
      margin: 0 5px;
      a {
        display: inline-block;
        text-decoration: none;
        color: black;
      }
    }
  }
  .logo {
    img {
      width: 110px;
      height: auto;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  .dropdown_menu {
    display: none;
    position: absolute;
    top: 150%;
    right: 0;
    width: max-content;
    background-color: white;
    border: 1px solid;
    padding: 5px;
    .dropdown_item{
      padding: 5px;
    }
  }
  .show {
    display: block;
  }
`;

export default SHeader;
