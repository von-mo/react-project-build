import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
`
export const ToastBox = styled.div`
  position: fixed;
  width: 200px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  img {
    display: block;
    width: 45px;
    margin: 30px auto 0;
  }
  span {
    display: block;
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
  }
`