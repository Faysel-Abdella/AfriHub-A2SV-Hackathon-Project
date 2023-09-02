import { styled } from "styled-components";

const Wrapper = styled.section`
  .input-container {
    position: relative;
  }

  /* .form-label {
    display: block;
  } */

  .input {
    background: var(--input-background);
    color: var(--input-text-color);
    margin: 10px;
  }

  .eye-icon {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 0;
    /* margin-left: -2px; */
    /* margin-top: 12px; */
    font-size: 20px;
    color: var(--show-password-color);
  }
`;

export default Wrapper;
