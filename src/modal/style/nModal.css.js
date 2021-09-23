import styled from "styled-components";
import { breakpoints } from "./utilis";

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease 0.15s;
  z-index: 2000;
  width: 100vw;
  &.fade-in {
    opacity: 1;
    transition: opacity ease 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity ease 0.10s;
  }
  @keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
  .background {
    background: rgba(0,0,0,.33);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    width:100%;
    ${breakpoints("width", "%", [
      { 790: 50 },
    ])};
    position: fixed;
    top:0;
    ${breakpoints("top", "vh", [
      { 790: 10 },
    ])};
    right:0;
    ${breakpoints("right", "vw", [
      { 790: 25 },
    ])};
    z-index: 1050;
    box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box-title {
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .x-close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: black;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-content{
      height: 69vh;
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`

export default Modal;
